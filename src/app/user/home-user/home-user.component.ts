import {Component, OnInit} from '@angular/core';
import {ShareJSService} from '../../service/share/share-js.service';
import {HouseService} from '../../service/house/house.service';
import {Router} from '@angular/router';
import {House} from '../../model/house';
import {NotificationService} from '../../service/notification/notification.service';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {
  houses: House[] = [];
  housesRandom: House[] = [];

  constructor(private shareJSService: ShareJSService,
              private router: Router,
              private notificationService: NotificationService,
              private houseService: HouseService) {
  }

  ngOnInit() {
    this.getAllHouse();
    this.getRandom9House();
  }

  getAllHouse() {
    this.houseService.getTop5().subscribe((Houses_BE) => {
      this.houses = Houses_BE;
      this.shareJSService.shareJS();
    });
  }

  viewHouseById(id) {
    this.router.navigateByUrl('/view/' + id);
  }

  getRandom9House() {
    this.houseService.getRandom9House().subscribe((housesRandomBE) => {
      this.housesRandom = housesRandomBE;
    });
  }
}
