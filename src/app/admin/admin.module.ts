import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {OrderComponent} from './Order/order.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HistoryOrderComponent} from './history-order/history-order.component';
import {InComeComponent} from './in-come/in-come.component';
import {OrderDetailHouseComponent} from './order-detail-house/order-detail-house.component';
import { UserManagementComponent } from './user-management/user-management.component';


@NgModule({
  declarations: [OrderComponent, HistoryOrderComponent, InComeComponent, OrderDetailHouseComponent, UserManagementComponent],
  exports: [
    OrderComponent,
    HistoryOrderComponent,
    OrderDetailHouseComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
  ]
})
export class   AdminModule {
}

