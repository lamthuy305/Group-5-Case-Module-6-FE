import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeUserComponent} from './home-user/home-user.component';
import {ProfileComponent} from './profile/profile.component';
import {ViewHouseComponent} from './view-house/view-house.component';
import {HomeRoutingModule} from './home-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {OrderDetailComponent} from './order-detail/order-detail.component';
import {ListHousesComponent} from './house/list-houses/list-houses.component';
import {CreateHouseComponent} from './house/create-house/create-house.component';
import {EditHouseComponent} from './house/edit-house/edit-house.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import { NotificationDetailComponent } from './notification-detail/notification-detail.component';


@NgModule({
  declarations: [HomeUserComponent, ProfileComponent, ViewHouseComponent, OrderDetailComponent, ListHousesComponent, CreateHouseComponent, EditHouseComponent, ChangePasswordComponent, NotificationDetailComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class HomeModule {
}
