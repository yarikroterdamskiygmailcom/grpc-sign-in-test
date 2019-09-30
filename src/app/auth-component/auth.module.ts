import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthRoutingModule, RoutingComponents } from './auth-routing.module';
import { AuthService} from '../_services/auth.service';
import { AuthComponentComponent} from './auth-component.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatDialogModule, MatFormFieldModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {MatModule} from './mat.module';


@NgModule({
  declarations: [
      AuthComponentComponent,
      RoutingComponents
  ],
  imports: [
      FormsModule,
      BrowserModule,
      AuthRoutingModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatFormFieldModule,
      MatDialogModule,
      HttpClientModule,
      MatModule
  ],
  providers: [
      AuthService
  ],
})
export class AuthModule { }
