import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {ListHouseComponent} from './list-house/list-house.component';
import { CreateHouseComponent } from './create-house/create-house.component';
import { EditHouseComponent } from './edit-house/edit-house.component';
import { OrderComponent } from './Order/order.component';
import { ViewUserComponent } from './view-user/view-user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ListHouseComponent, CreateHouseComponent, EditHouseComponent, OrderComponent, ViewUserComponent],
  exports: [
    ListHouseComponent,
    CreateHouseComponent,
    EditHouseComponent,
    OrderComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        ReactiveFormsModule,
      FormsModule,

    ]
})
export class AdminModule { }
