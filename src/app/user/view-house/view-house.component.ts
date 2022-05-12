import {Component, OnInit} from '@angular/core';
import {ShareJSService} from '../../service/share/share-js.service';
import {HouseService} from '../../service/house/house.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {House} from '../../model/house';

@Component({
  selector: 'app-view-house',
  templateUrl: './view-house.component.html',
  styleUrls: ['./view-house.component.css']
})
export class ViewHouseComponent implements OnInit {
  house: House = {};

  constructor(private shareJSService: ShareJSService,
              private houseService: HouseService,
              private router: Router,
              private activatedRoute: ActivatedRoute,) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.getHouseById(id);
    });

  }

  ngOnInit() {
    this.shareJSService.shareJS();
  }

  private getHouseById(id) {
    this.houseService.getHouseById(id).subscribe(houseBE => {
      this.house = houseBE;
    });
  }
}
