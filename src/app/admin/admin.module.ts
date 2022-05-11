import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListHouseComponent } from './list-house/list-house.component';


@NgModule({
  declarations: [ListHouseComponent],
  exports: [
    ListHouseComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
