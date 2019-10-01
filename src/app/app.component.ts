import {Component,} from '@angular/core';
import * as firebase from './_services/auth.service';
import {TokenService} from './_services/token.service';
import {PROFILE} from './_interface/profile.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {}
