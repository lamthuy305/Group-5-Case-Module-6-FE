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
import {Search} from '../../model/search';
import {RankPriceService} from '../../service/rank-price/rank-price.service';
import {RankBedroomService} from '../../service/rank-bedroom/rank-bedroom.service';
import {RankBathroomService} from '../../service/rank-bathroom/rank-bathroom.service';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {
  houses: House[] = [];
  housesSearch: any;
  housesRandom: House[] = [];
  types: Type[] = [];
  rankPrices: any[] = [];
  rankBedrooms: any[] = [];
  rankBathrooms: any[] = [];
  cities: any[] = [];
  formSearchFE: Search = {};
  showFormSearchDone: boolean = false;


  constructor(private shareJSService: ShareJSService,
              private router: Router,
              private notificationService: NotificationService,
              private houseService: HouseService,
              private typeService: TypeService,
              private cityService: CityService,
              private rankPriceService: RankPriceService,
              private rankBedroomService: RankBedroomService,
              private rankBathroomService: RankBathroomService) {
  }

  searchForm: FormGroup = new FormGroup({
    city: new FormControl(null),
    bedroom: new FormControl(null),
    bathroom: new FormControl(null),
    type: new FormControl(null),
    price: new FormControl(null),
  });


  ngOnInit() {
    this.getRandom9House();
  }

  getAllTypes() {
    this.typeService.getAll().subscribe((listType) => {
      this.types = listType;
      this.getAllCity();
    });
  }

  getAllRankPrice() {
    this.rankPriceService.getAll().subscribe((rankPricesBE) => {
      this.rankPrices = rankPricesBE;
      this.getAllRankBedroom();
    });
  }

  getAllRankBedroom() {
    this.rankBedroomService.getAll().subscribe((rankBedroomsBE) => {
      this.rankBedrooms = rankBedroomsBE;
      this.getAllRankBathroom();
    });
  }

  getAllRankBathroom() {
    this.rankBathroomService.getAll().subscribe((rankbathroomsBE) => {
      this.rankBathrooms = rankbathroomsBE;
      this.getTop5RentHouse();
    });
  }

  getAllCity() {
    this.cityService.getAll().subscribe((citiesBE) => {
      this.cities = citiesBE;
      this.getAllRankPrice();
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
    this.getAllTypes();
    this.houseService.getRandom9House().subscribe((housesRandomBE) => {
      this.housesRandom = housesRandomBE;
    });
  }

  searchSubmit() {
    this.formSearchFE.city = (<HTMLInputElement> document.getElementById('city')).value;
    if (this.formSearchFE.city % 1 != 0) {
      this.formSearchFE.city = '';
    }
    this.formSearchFE.bedroom = (<HTMLInputElement> document.getElementById('bedroom')).value;
    if (this.formSearchFE.bedroom % 1 != 0) {
      this.formSearchFE.bedroom = '';
    }
    this.formSearchFE.bathroom = (<HTMLInputElement> document.getElementById('bathroom')).value;
    if (this.formSearchFE.bathroom % 1 != 0) {
      this.formSearchFE.bathroom = '';
    }
    this.formSearchFE.type = (<HTMLInputElement> document.getElementById('type')).value;
    if (this.formSearchFE.type % 1 != 0) {
      this.formSearchFE.type = '';
    }
    this.formSearchFE.price = (<HTMLInputElement> document.getElementById('price')).value;
    if (this.formSearchFE.price % 1 != 0) {
      this.formSearchFE.price = '';
    }
    this.houseService.searchHouse(this.formSearchFE.city, this.formSearchFE.bedroom, this.formSearchFE.bathroom, this.formSearchFE.price, this.formSearchFE.type).subscribe((listSearchHouseBE) => {
      this.housesSearch = listSearchHouseBE;
      this.showFormSearchDone = true;
    },);
  }

}
