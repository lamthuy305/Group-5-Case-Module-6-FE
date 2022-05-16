import {Component, OnInit} from '@angular/core';
import {House} from '../../model/house';
import {Type} from '../../model/type';
import {StatusHouse} from '../../model/status-house';
import {HouseService} from '../../service/house/house.service';
import {TypeService} from '../../service/type/type.service';
import {StatusHouseService} from '../../service/StatusHouse/status-house.service';
import {Router} from '@angular/router';
import {NotificationService} from '../../service/notification/notification.service';
import {CityService} from '../../service/city/city.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  houses: House[] = [];
  types: Type[] = [];
  cities: any[] = [];
  statusHouses: StatusHouse[] = [];
  house: House = {};
  currentUser: any = {};
  selectedFile: File[] = [];
  houseEdit: House = {};
  houseEdit_Id: number = 0;
  showUploadListImage: boolean = true;

  constructor(private houseService: HouseService,
              private typeService: TypeService,
              private statusHouseService: StatusHouseService,
              private router: Router,
              private notificationService: NotificationService,
              private cityService: CityService) {
  }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.currentUser = localStorage.getItem('currentUser');
    this.currentUser = JSON.parse(this.currentUser);
    this.getAllHouses();
    // this.getAllStatusHouse();
    // this.getAllTypes();
    // this.getAllCity();
  }

  getAllHouses() {
    this.houseService.getAll(this.currentUser.id).subscribe((listHouse) => {
      this.houses = listHouse;
    }, error => {
    });
  }

  viewHouseById(id) {
    this.router.navigateByUrl('/view/' + id);
  }

}
