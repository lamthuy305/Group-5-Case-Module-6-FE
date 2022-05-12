import {Component, OnInit} from '@angular/core';
import {HouseService} from '../../service/house/house.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {House} from '../../model/house';

@Component({
  selector: 'app-order-house',
  templateUrl: './order-house.component.html',
  styleUrls: ['./order-house.component.css']
})
export class OrderHouseComponent implements OnInit {
  house: House = {};


  constructor(private houseService: HouseService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.getHouseById(id);
    });
  }

  ngOnInit() {
  }

  private getHouseById(id) {
    this.houseService.getHouseById(id).subscribe(houseBE => {
      this.house = houseBE;
    });
  }

}
