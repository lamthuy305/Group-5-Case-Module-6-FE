import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeUserComponent } from './home-user/home-user.component';
import { HouseComponent } from './house/house/house.component';


@NgModule({
  declarations: [HomeUserComponent, HouseComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
