import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListHouseComponent} from './list-house/list-house.component';
import {CreateHouseComponent} from './create-house/create-house.component';
import {OrderComponent} from './Order/order.component';
import {EditHouseComponent} from './edit-house/edit-house.component';
import {ViewUserComponent} from './view-user/view-user.component';
import {DetailHouseComponent} from './detail-house/detail-house.component';


const routes: Routes = [
  {
    path: 'house',
    component: ListHouseComponent
  },
  {
    path: 'house/create',
    component: CreateHouseComponent
  },
  {
    path: 'house/edit/:id',
    component: EditHouseComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'user',
    component: ViewUserComponent
  },
  {
    path:'house/detail/:id',
    component: DetailHouseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
