import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeUserComponent} from './home-user/home-user.component';
import {ProfileComponent} from './profile/profile.component';
import {ViewHouseComponent} from './view-house/view-house.component';


const routes: Routes = [
  {
    path: '',
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

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
