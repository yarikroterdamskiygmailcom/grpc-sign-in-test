import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../_services/auth.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent implements OnInit {
  profile: any;
  private history = [];
  constructor(
      private auth_service: AuthService,
      private router: Router

  ) {
      this.profile = this.auth_service.getProfile();
  }

  ngOnInit() {
      this.auth_service.Initialize(
          this.auth_service
              .isCheck
              .bind(this.auth_service)
      );
  }

}
