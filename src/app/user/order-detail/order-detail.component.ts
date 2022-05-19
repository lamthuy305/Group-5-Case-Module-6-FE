import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../service/order/order.service';
import {NotificationService} from '../../service/notification/notification.service';
import {Router} from '@angular/router';

const ONE_DAY = 86000000;
const TIME_CHECK = 50400000;
declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  orders: any = [];
  currentUser: any = {};
  currentTime: any = new Date();

  constructor(private orderService: OrderService,
              private notificationService: NotificationService,
              private router: Router) {
  }

  checkTimeShowButtonCheckin(checkin, checkout, statusOrder) {
    const checkInTime: Date = new Date(checkin);
    const checkOutTime: Date = new Date(checkout);
    if (this.currentTime.getTime() > checkInTime.getTime() && this.currentTime.getTime() < checkOutTime.getTime() && statusOrder == 2) {
      return true;
    } else {
      return false;
    }
  }


  getCurrentUser() {
    this.currentUser = localStorage.getItem('currentUser');
    this.currentUser = JSON.parse(this.currentUser);
    this.get5OrderByOrderIdRent();
  }


  getCheckTimeCaceledOr(id, checkIn) {
    Swal.fire({
      title: 'Bạn có chắc chắn?',
      text: 'Bạn có muốn hủy đơn này!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đồng ý!'
    }).then((result) => {
        if (result.isConfirmed) {
          const currentTime: Date = new Date();
          const checkInTime: Date = new Date(checkIn);
          if (checkInTime.getTime() - currentTime.getTime() < TIME_CHECK) {
            this.notificationService.showMessage('error', 'Canceled!', 'Không thể hủy do thời gian đến khi checkin còn nhỏ hơn 1 ngày');
          } else {
            this.orderService.customerChangeStatusOrderCanceled(id).subscribe(() => {
              this.notificationService.showMessage('success', 'Canceled!', 'Hủy đặt phòng thành công');
              this.get5OrderByOrderIdRent();
            });
          }
        }
      }
    );
  }

  get5OrderByOrderIdRent() {
    this.orderService.get5OrderByOrderIdRent(this.currentUser.id).subscribe(ordersBE => {
      this.orders = ordersBE;
    });
  }


  ngOnInit() {
    this.getCurrentUser();
  }

  changeCheckinOrder(id) {
    this.orderService.changeCheckinOrder(id).subscribe(ordersBE => {
      this.get5OrderByOrderIdRent();
    });
  }
}
