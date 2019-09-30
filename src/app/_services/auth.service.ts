import {TokenService} from './token.service';
import {Injectable, NgZone} from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {ProfileClient} from '../proto/com/freeje/api/client/profile_pb_service';
import {RequestMode} from '../proto/com/freeje/common_pb';
import {BehaviorSubject, Observable} from 'rxjs';
import {PROFILE} from '../_interface/profile.interface';
import {Router} from '@angular/router';


@Injectable()
export class AuthService {
    client;
    firebase1: any = firebase;
    autorize = false;
    profile: any = new BehaviorSubject({});
    constructor(
        public afAuth: AngularFireAuth,
        private router: Router,
        private ngZone: NgZone
    ) {
        this.client = new ProfileClient('https://webapi.freeje.org');
    }

    logout() {
        TokenService.destroyToken();
        this.ngZone.run( () => this.router.navigateByUrl(`login`));
    }

    getProfileWithServer(token) {
        return new Observable(obs => {
            const req = new RequestMode();
            // req.setId(token);
            const streem = this.client.self(req, {'JWT': token});
            streem.on('status', (status: any) => {
                console.log('ApiService.getStream.status', status);
            });
            streem.on('data', (status: any) => {
                obs.next(status);
            });
            streem.on('end', (status: any) => {
                obs.complete();
            });
        })
        .toPromise()
        .then((res: any) => {
            this.profile.next(this.reformarArrayInObject(res.array));
            this.ngZone.run( () => this.router.navigateByUrl(`profile`));
        });
    }

    isAutorize() {
        const token = TokenService.getToken();
        if (this.autorize) return;
        if (token) {
            this.getProfileWithServer(token);
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
                TokenService.saveToken(res.user._lat);
                this.autorize = true;
                return this.getProfileWithServer(TokenService.getToken());
            })
            .catch((error) => console.log(error));

    }

    private reformarArrayInObject(array) {
        const obj = new PROFILE();
        Object.keys(obj).forEach((item, index) => obj[item] = array[index]);
        return obj;
    }
}

