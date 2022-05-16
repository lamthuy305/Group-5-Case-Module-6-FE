import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../service/order/order.service';
import {Router} from '@angular/router';
import {NotificationService} from '../../service/notification/notification.service';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-history-order',
  templateUrl: './history-order.component.html',
  styleUrls: ['./history-order.component.css']
})
export class HistoryOrderComponent implements OnInit {
  orders: any = [];
  currentUser: any = {};

  constructor(private orderService: OrderService,
              private router: Router,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.currentUser = localStorage.getItem('currentUser');
    this.currentUser = JSON.parse(this.currentUser);
    this.getAllOrderStatusDone();
  }

  getAllOrderStatusDone() {
    this.orderService.getAllOrderStatusDone(this.currentUser.id).subscribe((ordersBE) => {
      this.orders = ordersBE;
      $(function() {
        $('#history-order').DataTable({
          'paging': true,
          'lengthChange': false,
          'searching': false,
          'ordering': true,
          'info': true,
          'autoWidth': false,
        });
      });
    });
  }

  deleteOrder(id) {
    Swal.fire({
      title: 'Bạn có muốn xóa?',
      text: 'You wont be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
          this.orderService.deleteOrder(id).subscribe(() => {
              this.notificationService.showMessage('success', 'Delete!', 'Xóa thành công');
              this.getAllOrderStatusDone();
            }, error =>
              this.notificationService.showMessage('erros', 'Delete!', 'Xóa lỗi')
          );
        }
      }
    );
  }
}
