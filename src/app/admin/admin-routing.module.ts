import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListHouseComponent} from './list-house/list-house.component';
import {CreateHouseComponent} from './create-house/create-house.component';
import {OrderComponent} from './Order/order.component';
import {EditHouseComponent} from './edit-house/edit-house.component';
import {ViewUserComponent} from './view-user/view-user.component';
import {HistoryOrderComponent} from './history-order/history-order.component';


const routes: Routes = [
  {
    path: 'houses',
    component: ListHouseComponent
  },
  {
    path: 'houses/create',
    component: CreateHouseComponent
  },
  {
    path: 'houses/edit/:id',
    component: EditHouseComponent
  },
  {
    path: 'orders',
    component: OrderComponent
  },
  {
    path: 'users',
    component: ViewUserComponent
  },
  {
    path: 'orders/history',
    component: HistoryOrderComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
