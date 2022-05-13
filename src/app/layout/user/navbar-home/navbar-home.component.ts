import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../../../service/notification/notification.service';
import {AuthService} from '../../../service/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css']
})
export class NavbarHomeComponent implements OnInit {
  currentUser: any = {};


  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.currentUser = localStorage.getItem('currentUser');
    this.currentUser = JSON.parse(this.currentUser);
  }


  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login')
  }
}
