import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NavbarComponent} from './layout/admin/navbar/navbar.component';
import {SidebarComponent} from './layout/admin/sidebar/sidebar.component';
import {AdminLayoutComponent} from './layout/admin/admin-layout/admin-layout.component';
import {HomeComponent} from './layout/user/home/home.component';
import {NavbarHomeComponent} from './layout/user/navbar-home/navbar-home.component';
import {SidebarHomeComponent} from './layout/user/sidebar-home/sidebar-home.component';
import {AuthModule} from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    AdminLayoutComponent,
    HomeComponent,
    NavbarHomeComponent,
    SidebarHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
