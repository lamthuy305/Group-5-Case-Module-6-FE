import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './layout/admin/admin-layout/admin-layout.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './layout/user/home/home.component';
import {ListHouseComponent} from "./admin/list-house/list-house.component";
import {CreateHouseComponent} from "./admin/create-house/create-house.component";


const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule)
  },
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () => import('./user/home.module').then(module => module.HomeModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'houses',
    component: ListHouseComponent,
  },
  {
    path:'houses/create',
    component: CreateHouseComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
