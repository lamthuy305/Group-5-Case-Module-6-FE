import {Component, OnInit} from '@angular/core';
import {NotificationService} from '../../../service/notification/notification.service';
import {AuthService} from '../../../service/auth/auth.service';
import {Router} from '@angular/router';
import {NotificationDetailService} from '../../../service/notification-detail/notification-detail.service';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css']
})
export class NavbarHomeComponent implements OnInit {
  currentUser: any = {};
  listNotificationDetail: any[] = [];


  constructor(private authService: AuthService,
              private router: Router,
              private notificationDetailService: NotificationDetailService) {
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.currentUser = localStorage.getItem('currentUser');
    this.currentUser = JSON.parse(this.currentUser);
    this.getAllNotificationDetailByCurrentId();
  }


  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  getAllNotificationDetailByCurrentId() {
    this.notificationDetailService.getAllNotificationDetailByIdUser(this.currentUser.id).subscribe((listBE) => {
      this.listNotificationDetail = listBE;
    });
  }

  deleteAllNotificationDetailByIdUser() {
    this.notificationDetailService.deleteAllNotificationDetailByIdUser(this.currentUser.id).subscribe(() => {
      this.getAllNotificationDetailByCurrentId();
      this.router.navigateByUrl('/notification');
    });
  }
}
