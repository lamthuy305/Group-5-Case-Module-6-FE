import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListHouseComponent} from '../house/list-house/list-house.component';


const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
