import {Component, OnInit} from '@angular/core';
import {ShareJSService} from '../../service/share/share-js.service';
import {HouseService} from '../../service/house/house.service';
import {Router} from '@angular/router';
import {House} from '../../model/house';
import {NotificationService} from '../../service/notification/notification.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Type} from '../../model/type';
import {TypeService} from '../../service/type/type.service';
import {CityService} from '../../service/city/city.service';

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
  types: Type[] = [];
  cities: any[] = [];

  searchForm: FormGroup = new FormGroup({
    city: new FormControl(),
    bedroom: new FormControl(''),
    bathroom: new FormControl(''),
    type: new FormControl(),
    price: new FormControl(''),
    description: new FormControl(''),
    img: new FormControl(),
    images: new FormControl(),
    statusHouse: new FormControl(),
  });

  constructor(private shareJSService: ShareJSService,
              private router: Router,
              private notificationService: NotificationService,
              private houseService: HouseService,
              private typeService: TypeService,
              private cityService: CityService) {
  }


  ngOnInit() {
    this.getTop5RentHouse();
    this.getRandom9House();
    this.getAllTypes();
    this.getAllCity();
  }

  getAllTypes() {
    this.typeService.getAll().subscribe((listType) => {
      this.types = listType;
    });
  }

  getAllCity() {
    this.cityService.getAll().subscribe((citiesBE) => {
      this.cities = citiesBE;
    });
  }

  getTop5RentHouse() {
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

  searchSubmit() {

  }
}
