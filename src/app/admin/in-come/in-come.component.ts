import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {OrderService} from '../../service/order/order.service';

declare var $: any;

@Component({
  selector: 'app-in-come',
  templateUrl: './in-come.component.html',
  styleUrls: ['./in-come.component.css']
})
export class InComeComponent implements OnInit {
  orders: any[] = [];
  months: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  years: number[] = [2022, 2023, 2024, 2025, 2026];
  monthFE: any;
  yearFE: any;
  sum_income: number = 0;
  currentUser: any = {};


  monthForm: FormGroup = new FormGroup({
    month: new FormControl(),
  });

  constructor(private orderService: OrderService) {
  }


  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.currentUser = localStorage.getItem('currentUser');
    this.currentUser = JSON.parse(this.currentUser);
    this.viewDate();

  }

  sumIncome() {
    this.sum_income = 0;
    for (let i = 0; i < this.orders.length; i++) {
      this.sum_income += (new Date(this.orders[i].checkOut).getUTCDate() - new Date(this.orders[i].checkIn).getUTCDate()) * this.orders[i].house.price;
    }
  }

  viewDate() {
    this.monthFE = (<HTMLInputElement> document.getElementById('month')).value;
    if (this.monthFE % 1 != 0) {
      this.monthFE = '';
    }
    this.yearFE = (<HTMLInputElement> document.getElementById('year')).value;
    if (this.yearFE % 1 != 0) {
      this.yearFE = '';
    }
    this.orderService.getHouseInMonthYear(this.currentUser.id, this.monthFE, this.yearFE).subscribe((listOrdersBE) => {
      this.orders = listOrdersBE;
      this.sumIncome();


      $.fn.dataTable.ext.errMode = 'none';
      $('#table-income').on('error.dt', function(e, settings, techNote, message) {
      });

      $(function() {
        $('#table-income').DataTable({
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
}
