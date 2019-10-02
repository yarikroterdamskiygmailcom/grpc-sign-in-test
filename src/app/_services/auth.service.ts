import {Injectable, NgZone} from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {grpc} from '@improbable-eng/grpc-web';
import {ProfileClient} from '../proto/com/freeje/api/client/profile_pb_service';
import {RequestMode} from '../proto/com/freeje/common_pb';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment';

const STATIC_VARIABLE = {
    LOGIN: 'login',
    PROFILE: 'login'
};

@Injectable()
export class AuthService {
    client;
    profile: any = new BehaviorSubject({});
    req: any = new RequestMode();

    constructor(
        public afAuth: AngularFireAuth,
        private router: Router,
        private ngZone: NgZone,
    ) {
        this.Initialize();
    }

    setClient(token): any {
        return new ProfileClient(environment.host, {
            transport: (options) => {
                const transport = grpc.CrossBrowserHttpTransport({withCredentials: true})(options);
                transport.start = function(metadata) {
                    if (token) {
                        metadata.set('JWT', token);
                        this.metadata = metadata;
                    }
                };
                return transport;
            },
            debug: false
        });
    }

    logout() {
        firebase
            .auth()
            .signOut()
            .then(() => this.ngZone.run(() => this.router.navigateByUrl(STATIC_VARIABLE.LOGIN)));

    }

    getProfileWithServer(): Promise<any> {
        return new Observable(obs => {
            const streem = this.client.self(this.req);

            streem.on('status', () => {
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
            .then((profile: any) => {
                if (!profile) {
                    return this.Initialize();
                }
                this.profile.next(this.getFieldsFromProfile(profile));
            })
            .catch(() => this.isCheck());
    }

    getProfile = () => this.profile;

    loginWithFirebase() {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        this.afAuth.auth.signInWithPopup(provider)
            .then(() => this.Initialize(this.isCheck.bind(this)))
            .catch((error) => console.log(error));

    }

    async isCheck() {
        this.getCurrentUser()
            .then((user: any): any => {
                const params: boolean = this.router.url.indexOf(STATIC_VARIABLE.LOGIN) > -1;
                if (params && user) {
                    return this.ngZone.run(() => {
                        this.router.navigateByUrl(STATIC_VARIABLE.PROFILE);
                    });
                }
                if (!params && user) {
                    return;
                }
                if (!user) {
                    return this.router.navigateByUrl(STATIC_VARIABLE.LOGIN);
                }
                return;
            });
    }

    async Initialize(callback?) {
        this.getCurrentUser()
            .then((user: any) => user ? user.getIdToken(true) : this.router.navigateByUrl(STATIC_VARIABLE.LOGIN))
            .then((token: string) => {
                if (!token) {
                    return;
                }
                this.client = this.setClient(token);

                return callback ? callback() : this.getProfileWithServer();
            });
    }

    private getFieldsFromProfile(profile) {
        // I can't use profile.toObject() because of error "profile_pb.js:1195 Uncaught ReferenceError: f is not defined"
        return {
            photo:      profile.getPhoto(),
            name:       profile.getName(),
            email:      profile.getEmail(),
            tariffname: profile.getTariffname(),
            funds:      profile.getFunds()
        };
    }

    getCurrentUser() {
        return new Promise((resolve, reject) => {
            const unsubscribe = firebase.auth()
                .onAuthStateChanged(user => {
                    unsubscribe();
                    resolve(user);
                }, reject);
        });
    }
}
