import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListHouseComponent} from "./list-house/list-house.component";
import {CreateHouseComponent} from "./create-house/create-house.component";


const routes: Routes = [
  {
    path: 'list',
    component: ListHouseComponent
  },
  {
    path:'create',
    component: CreateHouseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HouseRoutingModule { }
