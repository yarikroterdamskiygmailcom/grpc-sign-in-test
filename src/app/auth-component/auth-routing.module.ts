import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthLoginComponent} from './auth-login/auth-login.component';
import {ProfileUserComponent} from './profile-user/profile-user.component';

export const RoutingComponents = [
    AuthLoginComponent,
    ProfileUserComponent
];

const routes: Routes = [
    {path: 'login', component: AuthLoginComponent},
    {path: 'profile', component: ProfileUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
