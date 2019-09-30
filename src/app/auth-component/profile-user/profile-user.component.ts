import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../_services/auth.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss']
})
export class ProfileUserComponent implements OnInit {
  profile: any;
  constructor(
      private auth: AuthService,

  ) {
      this.profile = this.auth.getProfile();
  }

  ngOnInit() {
      this.auth.isAutorize();
  }

}
