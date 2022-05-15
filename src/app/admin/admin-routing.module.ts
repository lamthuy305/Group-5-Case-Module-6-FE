import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListHouseComponent} from './list-house/list-house.component';
import {OrderComponent} from './Order/order.component';
import {ViewUserComponent} from './view-user/view-user.component';
import {DetailHouseComponent} from './detail-house/detail-house.component';
import {HistoryOrderComponent} from './history-order/history-order.component';
import {AuthGuard} from '../helper/auth-guard';
import {InComeComponent} from './in-come/in-come.component';


const routes: Routes = [
  {
    path: 'houses',
    component: ListHouseComponent
  },

  {
    path: 'orders',
    component: OrderComponent
  },
  {
    path: 'users',
    component: ViewUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'house/detail/:id',
    component: DetailHouseComponent
  },
  {
    path: 'orders/history',
    component: HistoryOrderComponent
  },
  {
    path: 'income',
    component: InComeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
