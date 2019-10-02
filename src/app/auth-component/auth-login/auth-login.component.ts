import {Component, OnInit} from '@angular/core';

import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../_services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
    selector: 'app-auth-login',
    templateUrl: './auth-login.component.html',
    styleUrls: ['./auth-login.component.scss', '../auth-component.component.scss']
})
export class AuthLoginComponent implements OnInit {
    active: any = {
        register: false,
        login: true
    };
    user: any = this.fb.group({
        password: [],
        email: []
    });
    err = false;

    constructor(
        private http: HttpClient,
        private auth_service: AuthService,
        private fb: FormBuilder,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.auth_service.isCheck();
    }


}
