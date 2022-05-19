import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../service/auth/auth.service';
import {Router} from '@angular/router';
import {NotificationDetailService} from '../../../service/notification-detail/notification-detail.service';
import {ProfileService} from '../../../service/profile/profile.service';

declare var $: any;

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css']
})
export class NavbarHomeComponent implements OnInit {
  currentUser: any = {};
  listNotificationDetail: any[] = [];
  profile: any = {};


  constructor(private authService: AuthService,
              private router: Router,
              private notificationDetailService: NotificationDetailService,
              private profileService: ProfileService) {
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  getProfileByUserId() {
    this.profileService.getProfileByUserId(this.currentUser.id).subscribe((profileBE) => {
      this.profile = profileBE;
    });
  }


  getCurrentUser() {
    this.currentUser = localStorage.getItem('currentUser');
    this.currentUser = JSON.parse(this.currentUser);
    this.getAllNotificationDetailByCurrentId();
    this.getProfileByUserId();
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
