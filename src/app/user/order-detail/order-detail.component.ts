import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../service/order/order.service';
import {NotificationService} from '../../service/notification/notification.service';
import {Router} from '@angular/router';

const ONE_DAY = 86000000;
const TIME_CHECK = 50400000;


@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  orders: any = [];
  currentUser: any = {};

  constructor(private orderService: OrderService,
              private notificationService: NotificationService,
              private router: Router) {
  }

  getCurrentUser() {
    this.currentUser = localStorage.getItem('currentUser');
    this.currentUser = JSON.parse(this.currentUser);
    this.get5OrderByOrderIdRent();
  }

  getCheckTimeCaceledOr(id, checkIn) {
    const currentTime: Date = new Date();
    const checkInTime: Date = new Date(checkIn);
    console.log(checkInTime.getTime() - currentTime.getTime() < TIME_CHECK);
    if (checkInTime.getTime() - currentTime.getTime() < TIME_CHECK) {
      this.notificationService.showMessage('error', 'Canceled!', 'Không thể hủy do thời gian đên checkin nhỏ hơn 1 ngày');
    } else {
      this.orderService.changeStatusOrderCanceled(id).subscribe(() => {
        this.notificationService.showMessage('success', 'Canceled!', 'Hủy đặt phòng thành công');
        this.get5OrderByOrderIdRent();
      });
    }
  }

  get5OrderByOrderIdRent() {
    this.orderService.get5OrderByOrderIdRent(this.currentUser.id).subscribe(ordersBE => {
      this.orders = ordersBE;
    });
  }


  ngOnInit() {
    this.getCurrentUser();
  }

}
