import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeUserComponent} from './home-user/home-user.component';


const routes: Routes = [
  {
    path: 'user',
    component: HomeUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
