import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListHouseComponent} from './list-house/list-house.component';


const routes: Routes = [
  {
    path: 'list',
    component: ListHouseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
