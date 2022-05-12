import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeUserComponent } from './home-user/home-user.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewHouseComponent } from './view-house/view-house.component';


@NgModule({
  declarations: [HomeUserComponent, ProfileComponent, ViewHouseComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,

  ]
})
export class HomeModule { }
