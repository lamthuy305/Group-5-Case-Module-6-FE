import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeUserComponent } from './home-user/home-user.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewHouseComponent } from './view-house/view-house.component';
import {CreateHouseComponent} from '../admin/create-house/create-house.component';
import {EditHouseComponent} from '../admin/edit-house/edit-house.component';


let DeleteHouseComponent;

@NgModule({
  declarations: [HomeUserComponent, ProfileComponent, ViewHouseComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,

  ]
})
export class HomeModule { }
