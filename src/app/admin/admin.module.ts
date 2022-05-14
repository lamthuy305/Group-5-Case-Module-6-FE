import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {ListHouseComponent} from './list-house/list-house.component';
import {EditHouseComponent} from './edit-house/edit-house.component';
import {OrderComponent} from './Order/order.component';
import {ViewUserComponent} from './view-user/view-user.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DetailHouseComponent} from './detail-house/detail-house.component';
import {HistoryOrderComponent} from './history-order/history-order.component';


@NgModule({
  declarations: [ListHouseComponent, EditHouseComponent, OrderComponent, ViewUserComponent, DetailHouseComponent, HistoryOrderComponent],
  exports: [
    ListHouseComponent,
    EditHouseComponent,
    OrderComponent,
    ViewUserComponent,
    DetailHouseComponent,
    HistoryOrderComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        ReactiveFormsModule,

    ]
})
export class AdminModule {
}
