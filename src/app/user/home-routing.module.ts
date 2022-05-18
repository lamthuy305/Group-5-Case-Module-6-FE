import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeUserComponent} from './home-user/home-user.component';
import {ProfileComponent} from './profile/profile.component';
import {ViewHouseComponent} from './view-house/view-house.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';
import {ListHousesComponent} from './house/list-houses/list-houses.component';
import {EditHouseComponent} from './house/edit-house/edit-house.component';
import {CreateHouseComponent} from './house/create-house/create-house.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {NotificationDetailComponent} from './notification-detail/notification-detail.component';


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
    path: 'houses/create',
    component: CreateHouseComponent
  },
  {
    path: 'houses/edit/:id',
    component: EditHouseComponent
  },
  {
    path: 'orderDetail',
    component: OrderDetailComponent
  },
  {
    path: 'changePassword',
    component: ChangePasswordComponent
  },
  {
    path:'notification',
    component:NotificationDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
