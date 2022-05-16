import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {House} from '../../../model/house';
import {Type} from '../../../model/type';
import {StatusHouse} from '../../../model/status-house';
import {HouseService} from '../../../service/house/house.service';
import {TypeService} from '../../../service/type/type.service';
import {StatusHouseService} from '../../../service/StatusHouse/status-house.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {NotificationService} from '../../../service/notification/notification.service';
import {CityService} from '../../../service/city/city.service';

@Component({
  selector: 'app-edit-house',
  templateUrl: './edit-house.component.html',
  styleUrls: ['./edit-house.component.css']
})
export class EditHouseComponent implements OnInit {
  currentHouseId: any;
  types: Type[] = [];
  cities: any[] = [];
  statusHouses: StatusHouse[] = [];
  house: House = {};
  currentUser: any = {};

  houseForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    area: new FormControl(''),
    city: new FormControl(null),
    location: new FormControl(''),
    bedroom: new FormControl(''),
    bathroom: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    img: new FormControl(),
    statusHouse: new FormControl(null),
    type: new FormControl(null),
  });


  constructor(private houseService: HouseService,
              private typeService: TypeService,
              private statusHouseService: StatusHouseService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private notificationService: NotificationService,
              private cityService: CityService) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.getHouseById(id);
      this.currentHouseId = id;
    });

  }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.currentUser = localStorage.getItem('currentUser');
    this.currentUser = JSON.parse(this.currentUser);
    this.getAllStatusHouse();
    this.getAllCity();
    this.getAllTypes();
  }


  getHouseById(id) {
    this.houseService.getHouseById(id).subscribe((houseBE) => {
      this.house = houseBE;
      this.nameControl.setValue(this.house.name);
      this.areaControl.setValue(this.house.area);
      this.cityControl.setValue(this.house.city);
      this.locationControl.setValue(this.house.location);
      this.bedroomControl.setValue(this.house.bedroom);
      this.bathroomControl.setValue(this.house.bathroom);
      this.priceControl.setValue(this.house.price);
      this.descriptionControl.setValue(this.house.description);
      this.statusHouseControl.setValue(this.house.statusHouse);
      this.typeControl.setValue(this.house.type);
    }, error => {
    });
  }

  editHouse() {
    const house = new FormData();
    house.append('id', this.currentHouseId);
    house.append('name', this.houseForm.value.name);
    house.append('area', this.houseForm.value.area);
    house.append('city', this.houseForm.value.city);
    house.append('location', this.houseForm.value.location);
    house.append('bedroom', this.houseForm.value.bedroom);
    house.append('bathroom', this.houseForm.value.bathroom);
    house.append('price', this.houseForm.value.price);
    house.append('description', this.houseForm.value.description);
    const files = (document.getElementById('img') as HTMLInputElement).files;
    if (files.length > 0) {
      house.append('img', files[0]);
    }
    house.append('statusHouse', this.houseForm.value.statusHouse);
    house.append('type', this.houseForm.value.type);
    house.append('user', this.currentUser.id);
    this.houseService.createHouse(house).subscribe(() => {
        this.notificationService.showMessage('success', 'Thành công!', 'Chỉnh sửa thành công');
     this.router.navigateByUrl('/houses')
      }, error => this.notificationService.showMessage('error', 'Xảy ra lỗi!', 'Vui lòng kiểm tra lại thông tin vừa nhập')
    );
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

  getAllStatusHouse() {
    this.statusHouseService.getAll().subscribe((listStatusOfHouse) => {
      this.statusHouses = listStatusOfHouse;
    }, error => {
    });
  }

  get idControl() {
    return this.houseForm.get('id');
  }

  get nameControl() {
    return this.houseForm.get('name');
  }

  get areaControl() {
    return this.houseForm.get('area');
  }

  get cityControl() {
    return this.houseForm.get('city');
  }

  get locationControl() {
    return this.houseForm.get('location');
  }

  get bedroomControl() {
    return this.houseForm.get('bedroom');
  }

  get bathroomControl() {
    return this.houseForm.get('bathroom');
  }

  get priceControl() {
    return this.houseForm.get('price');
  }

  get descriptionControl() {
    return this.houseForm.get('description');
  }

  get imgControl() {
    return this.houseForm.get('img');
  }

  get statusHouseControl() {
    return this.houseForm.get('statusHouse');
  }

  get typeControl() {
    return this.houseForm.get('type');
  }
}
