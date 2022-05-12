import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HouseRoutingModule } from './house-routing.module';
import { DetailHouseComponent } from './detail-house/detail-house.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {ListHouseComponent} from "./list-house/list-house.component";
import {CreateHouseComponent} from "./create-house/create-house.component";
import { EditHouseComponent } from './edit-house/edit-house.component';
import { DeleteHouseComponent } from './delete-house/delete-house.component';


@NgModule({
  declarations: [DetailHouseComponent,
    ListHouseComponent,
    CreateHouseComponent,
    EditHouseComponent,
    DeleteHouseComponent],
  imports: [
    CommonModule,
    HouseRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class HouseModule { }
