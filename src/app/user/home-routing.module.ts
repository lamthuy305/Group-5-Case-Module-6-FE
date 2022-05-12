import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeUserComponent} from './home-user/home-user.component';
import {ProfileComponent} from './profile/profile.component';
import {ViewHouseComponent} from './view-house/view-house.component';
import {ProfileEditComponent} from "./profile-edit/profile-edit.component";


const routes: Routes = [
  {
    path: '',
    component: HomeUserComponent
  },
  {
    path: 'house',
    component: ViewHouseComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'profile/edit/:id',
    component: ProfileEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
