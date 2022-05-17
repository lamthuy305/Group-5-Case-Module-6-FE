import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './layout/admin/admin-layout/admin-layout.component';
import {LoginComponent} from './auth/login/login.component';
import {HomeComponent} from './layout/user/home/home.component';
import {RegisterComponent} from "./auth/register/register.component";


const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule)
  },
  {
    path: '',
    component: HomeComponent,
    loadChildren: () => import('./user/home.module').then(module => module.HomeModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration:'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
