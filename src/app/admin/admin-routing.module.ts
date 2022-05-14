import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListHouseComponent} from './list-house/list-house.component';
import {CreateHouseComponent} from './create-house/create-house.component';
import {OrderComponent} from './Order/order.component';
import {EditHouseComponent} from './edit-house/edit-house.component';
import {ViewUserComponent} from './view-user/view-user.component';
import {AuthGuard} from "../helper/auth-guard";


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
    component: ViewUserComponent,
    canActivate:[AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
