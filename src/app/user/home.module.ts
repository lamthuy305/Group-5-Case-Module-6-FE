import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeUserComponent } from './home-user/home-user.component';
import {ProfileComponent} from "./profile/profile.component";
import {ViewHouseComponent} from "./view-house/view-house.component";
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

@NgModule({
  declarations: [HomeUserComponent, ProfileComponent, ViewHouseComponent, ProfileEditComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,

  ]
})
export class HomeModule { }
