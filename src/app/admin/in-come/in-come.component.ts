import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-in-come',
  templateUrl: './in-come.component.html',
  styleUrls: ['./in-come.component.css']
})
export class InComeComponent implements OnInit {
  selectedMonth: any;
  months: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  years: number[] = [2022, 2023, 2024, 2025, 2026];
  monthForm: FormGroup = new FormGroup({
    month: new FormControl(),
  });

  constructor() {
  }


  ngOnInit() {
  }

  // // this.formSearchFE.price = (<HTMLInputElement> document.getElementById('price')).value;
  //
  // changemonth(month) {
  //   this.selectedMonth = (<HTMLInputElement> document.getElementById('month')).value;
  //   console.log(month);
  //   console.log(this.selectedMonth);
  //
  //
  // }
  createMonth() {
    console.log((<HTMLInputElement> document.getElementById('month')).value);
    console.log((<HTMLInputElement> document.getElementById('year')).value);


  }
}
