import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../service/order/order.service';
import {Router} from '@angular/router';
import {NotificationService} from '../../service/notification/notification.service';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
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
    this.getAllOrderProcessingByUserId();
  }

  getAllOrderProcessingByUserId() {
    this.orderService.getAllOrderProcessingByUserId(this.currentUser.id).subscribe((ordersBE) => {
      this.orders = ordersBE;
      $.fn.dataTable.ext.errMode = 'none';
      $('#table-order').on('error.dt', function(e, settings, techNote, message) {
      });

      $(function() {
        $('#table-order').DataTable({
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

  changeStatusOrderDone(id) {
    Swal.fire({
      title: 'Bạn có chắc chắn?',
      text: 'Nếu bạn nhận đơn này, những đơn khác có thời gian bị trùng sẽ tự động hủy!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Nhận đơn!'
    }).then((result) => {
        if (result.isConfirmed) {
          this.orderService.changeStatusOrderDone(id).subscribe(() => {
              this.notificationService.showMessage('success', 'Thành công!', 'Đồng ý đơn hàng');
              this.getAllOrderProcessingByUserId();
            }, error => this.notificationService.showMessage('error', 'Done!', 'Xảy ra lỗi')
          );
        }
      }
    );
  }

  changeStatusOrderCanceled(id) {
    Swal.fire({
      title: 'Bạn có muốn hủy đơn này?',
      text: 'You wont be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Hủy đơn!'
    }).then((result) => {
        this.orderService.changeStatusOrderCanceled(id).subscribe(() => {
            this.notificationService.showMessage('success', 'Thành công!', 'Đã từ chối đơn hàng');
            this.getAllOrderProcessingByUserId();

          }, error => this.notificationService.showMessage('error', 'Canceled!', 'Xảy ra lỗi')
        );
      }
    );
  }


}
