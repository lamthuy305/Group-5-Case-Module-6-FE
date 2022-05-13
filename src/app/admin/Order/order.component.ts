import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../service/order/order.service';
import {Router} from '@angular/router';
import {NotificationService} from '../../service/notification/notification.service';

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
              private notificationService:NotificationService) {
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
      console.log(this.orders);
    });
  }

  changeStatusOrderDone(id) {
    this.orderService.changeStatusOrderDone(id).subscribe(() => {
        this.notificationService.showMessage('success', 'Thành công!', 'Đồng ý đơn hàng');
        this.router.navigateByUrl('/admin/orders')
      }, error => this.notificationService.showMessage('error', 'Done!', 'Xảy ra lỗi')
    );
  }

  changeStatusOrderCanceled(id) {
    this.orderService.changeStatusOrderCanceled(id).subscribe(() => {
        this.notificationService.showMessage('success', 'Thành công!', 'Đã từ chối đơn hàng');
        this.router.navigateByUrl('/admin/orders')
      }, error => this.notificationService.showMessage('error', 'Canceled!', 'Xảy ra lỗi')
    );
  }
}
