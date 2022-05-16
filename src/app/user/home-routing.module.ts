import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeUserComponent} from './home-user/home-user.component';
import {ProfileComponent} from './profile/profile.component';
import {ViewHouseComponent} from './view-house/view-house.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';
import {ListHousesComponent} from './house/list-houses/list-houses.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeUserComponent
  },
  {
    path: 'view/:id',
    component: ViewHouseComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'houses',
    component: ListHousesComponent
  },
  {
    path: 'orderDetail',
    component: OrderDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
