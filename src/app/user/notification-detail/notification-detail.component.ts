import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth/auth.service';
import {Router} from '@angular/router';
import {NotificationDetailService} from '../../service/notification-detail/notification-detail.service';
import {InfomationSaveService} from '../../service/infomation-save/infomation-save.service';

@Component({
  selector: 'app-notification-detail',
  templateUrl: './notification-detail.component.html',
  styleUrls: ['./notification-detail.component.css']
})
export class NotificationDetailComponent implements OnInit {
  currentUser: any = {};
  listInfomationIsActive: any[] = [];
  //Tạm hiểu là list thông báo chưa đọc

  lisInfomationSaveActive: any[] = [];

  //Tạm hiểu là list thông báo đã đọc

  constructor(private authService: AuthService,
              private router: Router,
              private notificationDetailService: NotificationDetailService,
              private infomationSaveService: InfomationSaveService) {
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.currentUser = localStorage.getItem('currentUser');
    this.currentUser = JSON.parse(this.currentUser);
    this.get10InformationSaveByIdUserActive();
    this.getAllInformationSaveByIdUserIsActive();
  }


  get10InformationSaveByIdUserActive() {
    this.infomationSaveService.get10InformationSaveByIdUserActive(this.currentUser.id).subscribe((listBE) => {
      this.lisInfomationSaveActive = listBE;
    });
  }

  getAllInformationSaveByIdUserIsActive() {
    this.infomationSaveService.getAllInformationSaveByIdUserIsActive(this.currentUser.id).subscribe((listBE) => {
      this.listInfomationIsActive = listBE;
    });
  }

  changeActiveInfomation(id) {
    this.infomationSaveService.changeActiveInfomation(id).subscribe(() => {
      this.get10InformationSaveByIdUserActive();
      this.getAllInformationSaveByIdUserIsActive();
    });
  }
}
