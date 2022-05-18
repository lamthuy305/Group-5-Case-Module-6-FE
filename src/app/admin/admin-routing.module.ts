import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {OrderComponent} from './Order/order.component';
import {HistoryOrderComponent} from './history-order/history-order.component';
import {AuthGuard} from '../helper/auth-guard';
import {InComeComponent} from './in-come/in-come.component';
import {OrderDetailHouseComponent} from './order-detail-house/order-detail-house.component';
import {UserManagementComponent} from './user-management/user-management.component';


const routes: Routes = [
  {
    path: 'orders',
    component: OrderComponent
  },
  {
    path: 'users',
    component: UserManagementComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'orders/history',
    component: HistoryOrderComponent
  },
  {
    path: 'income',
    component: InComeComponent
  },
  {
    path: 'houses/orders/:id',
    component: OrderDetailHouseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
