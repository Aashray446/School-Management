import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotComponent } from './forgot/forgot.component';



@NgModule({
  declarations: [LoginComponent, SignInComponent, ForgotComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class LoginModule { }
