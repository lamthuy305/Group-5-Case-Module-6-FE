import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeUserComponent} from './home-user/home-user.component';
import {ProfileComponent} from './profile/profile.component';
import {ViewHouseComponent} from './view-house/view-house.component';
import {HomeRoutingModule} from './home-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [HomeUserComponent, ProfileComponent, ViewHouseComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class HomeModule {
}
