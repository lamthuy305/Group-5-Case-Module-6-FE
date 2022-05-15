import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user/user.service';
import {User} from '../../model/user';
import {NotificationService} from '../../service/notification/notification.service';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  users: User[] = [];

  user: any;

  constructor(private userService: UserService,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.getAllUser();
  }


  getAllUser() {
    this.userService.getAllUser().subscribe((listUserFromBE) => {
      this.users = listUserFromBE;
    });
  }

  lockOrUnlockUser(id) {
    Swal.fire({
      title: 'Bạn có chắc chắn?',
      text: 'Bạn có muốn thực hiện!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đồng ý!'
    }).then((result) => {
      this.userService.lockOrUnlockUser(id).subscribe((listUserFromBE) => {
        this.notificationService.showMessage('success', 'Success!', 'Thay đổi thành công');
        this.getAllUser();
      });
      }
    );




  }
}
