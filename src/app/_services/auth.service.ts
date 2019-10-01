import {TokenService} from './token.service';
import {Injectable, NgZone} from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {ProfileClient} from '../proto/com/freeje/api/client/profile_pb_service';
import {RequestMode} from '../proto/com/freeje/common_pb';
import {BehaviorSubject, Observable} from 'rxjs';
import {PROFILE} from '../_interface/profile.interface';
import {Router} from '@angular/router';
import {grpc} from '@improbable-eng/grpc-web';
import {makeDefaultTransport} from '@improbable-eng/grpc-web/dist/typings/transports/Transport';

@Injectable()
export class AuthService {
    client;
    firebase1: any = firebase;
    autorize = false;
    profile: any = new BehaviorSubject({});
    req: any = new RequestMode();
    metadataOuter: any = new grpc.Metadata();

    constructor(
        public afAuth: AngularFireAuth,
        private router: Router,
        private ngZone: NgZone
    ) {
        // this.req.setId(TokenService.getToken());
        this.metadataOuter.set('jwt', TokenService.getToken());
        this.client = new ProfileClient('https://webapi.freeje.org', {
            transport: (options) => {
                const t = grpc.CrossBrowserHttpTransport({withCredentials: true})(options);
                t.start = function(metadata) {
                    const token = TokenService.getToken();
                    if (token) {
                        metadata.set('JWT', token);
                        this.metadata = metadata;
                    }
                };
                return t;
            },
            debug: false,
        });
    }

    logout() {
        TokenService.destroyToken();
        this.ngZone.run(() => this.router.navigateByUrl(`login`));
    }

    getProfileWithServer() {
        return new Observable(obs => {

            const streem = this.client.self(this.req);

            streem.on('status', (status: any) => {
                console.log('ApiService.getStream.status');
            });
            streem.on('data', (status: any) => {
                console.log('STREAM DATA');
                obs.next(status);
            });
            streem.on('end', () => {
                console.log('STREAM END');
                obs.complete();
            });
        })
            .toPromise()
            .then((res: any) => {
                if (!res) {
                    // TokenService.destroyToken();
                    return this.TOKEN_REFRESH_LOGIN();
                }
                this.profile.next(this.reformarArrayInObject(res.array));
                this.ngZone.run(() => this.router.navigateByUrl(`profile`));
            });
    }

    isAutorize() {
        const token = TokenService.getToken();
        if (this.autorize) {
            return;
        }
        if (token) {
            this.getProfileWithServer();
        } else {
            this.router.navigateByUrl(`login`);
        }
    }

    getProfile() {
        return this.profile;
    }

    loginWithFirebase() {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        this.afAuth.auth.signInWithPopup(provider)
            .then((res: any) => {
                console.log('loginWithFirebase');
                TokenService.saveToken(res.user._lat);
                this.autorize = true;
                return this.getProfileWithServer();
            })
            .catch((error) => console.log(error));

    }

    async TOKEN_REFRESH_LOGIN() {
        const auth = await firebase.auth();
        this.getCurrentUser(auth)
            .then((res: any) => res.getIdToken(true))
            .then((idToken: string) =>  {
                TokenService.saveToken(idToken);
                return this.getProfileWithServer();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    private reformarArrayInObject(array) {
        const obj = new PROFILE();
        Object.keys(obj).forEach((item, index) => obj[item] = array[index]);
        return obj;
    }

     getCurrentUser(auth) {
        return new Promise((resolve, reject) => {
            const unsubscribe = auth.onAuthStateChanged(user => {
                unsubscribe();
                resolve(user);
            }, reject);
        });
    }
}
