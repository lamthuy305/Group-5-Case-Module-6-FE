import {Component, OnInit} from '@angular/core';
import {Type} from '../../../model/type';
import {StatusHouse} from '../../../model/status-house';
import {House} from '../../../model/house';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HouseService} from '../../../service/house/house.service';
import {TypeService} from '../../../service/type/type.service';
import {StatusHouseService} from '../../../service/StatusHouse/status-house.service';
import {Router} from '@angular/router';
import {NotificationService} from '../../../service/notification/notification.service';
import {CityService} from '../../../service/city/city.service';


@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.css']
})
export class CreateHouseComponent implements OnInit {
  selectedFile: File[] = [];
  filePath: string = '';
  types: Type[] = [];
  cities: any[] = [];
  statusHouses: StatusHouse[] = [];
  house: House = {};
  currentUser: any = {};
  listImageUpLoad: any[] = [];

  houseForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required]),
    city: new FormControl(null, [Validators.required]),
    location: new FormControl('', [Validators.required]),
    bedroom: new FormControl('', [Validators.required,Validators.min(0)]),
    bathroom: new FormControl('', [Validators.required,Validators.min(0)]),
    price: new FormControl('', [Validators.required,Validators.min(0)]),
    description: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required]),
    statusHouse: new FormControl(null, [Validators.required]),
    type: new FormControl(null, [Validators.required]),
  });


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
    this.getAllStatusHouse();
    this.getAllCity();
    this.getAllTypes();
  }


  createHouse() {
    const house = new FormData();
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
    if (this.selectedFile.length > 0) {
      for (let i = 0; i < this.selectedFile.length; i++) {
        house.append('images', this.selectedFile[i]);
      }

    }
    house.append('statusHouse', this.houseForm.value.statusHouse);
    house.append('type', this.houseForm.value.type);
    house.append('user', this.currentUser.id);
    this.houseService.createHouse(house).subscribe(() => {
        this.notificationService.showMessage('success', 'Thành công!', 'Tạo mới thành công');
        this.router.navigateByUrl('/houses');
      }, error => this.notificationService.showMessage('error', 'Xảy ra lỗi!', 'Vui lòng kiểm tra lại thông tin vừa nhập')
    );
  }

  changeFile($event) {
    this.selectedFile = $event.target.files;
    for (let i = 0; i < this.selectedFile.length; i++) {
      this.listImageUpLoad.push(this.selectedFile[i].name);
      console.log(this.selectedFile[i].name);
      console.log(this.selectedFile[i]);
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.filePath = reader.result as string;
    }
    reader.readAsDataURL(this.selectedFile[0])
    console.log(this.listImageUpLoad);
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

}
