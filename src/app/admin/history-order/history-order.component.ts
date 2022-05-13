import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../service/order/order.service';
import {Router} from '@angular/router';
import {NotificationService} from '../../service/notification/notification.service';

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
              private notificationService:NotificationService) {
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
    });
  }
}
