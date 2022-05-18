import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {NotificationService} from '../../service/notification/notification.service';
import {OrderService} from '../../service/order/order.service';

@Component({
  selector: 'app-order-detail-house',
  templateUrl: './order-detail-house.component.html',
  styleUrls: ['./order-detail-house.component.css']
})
export class OrderDetailHouseComponent implements OnInit {
  orders: any[] = [];

  constructor(private orderService: OrderService,
              private activatedRoute: ActivatedRoute,
              private notificationService: NotificationService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.getAllOrderByHouseId(id);
    });
  }

  ngOnInit() {
  }

  private getAllOrderByHouseId(id) {
    this.orderService.getAllOrderByHouseId(id).subscribe((listImages) => {
      this.orders = listImages;
    });
  }
}
