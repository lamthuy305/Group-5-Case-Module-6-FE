import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../service/user/user.service';
import {NotificationService} from '../../service/notification/notification.service';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

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
      $.fn.dataTable.ext.errMode = 'none';
      $('#user-list-table').on('error.dt', function(e, settings, techNote, message) {
      });
      $(function() {
        $('#user-list-table').DataTable({
          'paging': true,
          'lengthChange': false,
          'searching': true,
          'ordering': true,
          'info': true,
          'autoWidth': false,
        });
      });
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
        if (result.isConfirmed) {
          this.userService.lockOrUnlockUser(id).subscribe((listUserFromBE) => {
            this.notificationService.showMessage('success', 'Success!', 'Thay đổi thành công');
            this.getAllUser();
          });
        }
      }
    );
  }
}
