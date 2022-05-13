import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ReactiveFormsModule} from "@angular/forms";
import { ChangePasswordComponent } from './change-password/change-password.component';
import {AuthRoutingModule} from './auth-routing.module';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
