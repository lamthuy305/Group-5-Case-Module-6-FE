import {Component, OnInit} from '@angular/core';
import {House} from '../../model/house';
import {Type} from '../../model/type';
import {StatusHouse} from '../../model/status-house';
import {HouseService} from '../../service/house/house.service';
import {TypeService} from '../../service/type/type.service';
import {StatusHouseService} from '../../service/statusHouse/status-house.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {NotificationService} from '../../service/notification/notification.service';
import {CityService} from '../../service/city/city.service';

declare var $: any;
declare var Swal: any;

@Component({
  selector: 'app-list-house',
  templateUrl: './list-house.component.html',
  styleUrls: ['./list-house.component.css']
})
export class ListHouseComponent implements OnInit {
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


  houseForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(''),
    area: new FormControl(''),
    city: new FormControl(null),
    location: new FormControl(''),
    bedroom: new FormControl(''),
    bathroom: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    img: new FormControl(),
    images: new FormControl(),
    statusHouse: new FormControl(null),
    type: new FormControl(null),
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
    this.getAllHouses();
    this.getAllStatusHouse();
    this.getAllTypes();
    this.getAllCity();
  }

  changeFile($event) {
    this.selectedFile = $event.target.files;
  }

  getAllHouses() {
    this.houseService.getAll(this.currentUser.id).subscribe((listHouse) => {
      this.houses = listHouse;
    }, error => {
    });
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

  delete(id) {
    Swal.fire({
      title: 'Bạn có muốn xóa?',
      text: 'You wont be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
          this.houseService.deleteHouse(id).subscribe(() => {
            this.notificationService.showMessage('success', 'Delete!!', 'Xóa thành công');
            this.getAllHouses();
          }, error =>
            this.notificationService.showMessage('erros', 'Delete!','Xóa lỗi'));
        }
      }
    );
  }

  createHouse() {
    const house = new FormData();
    if (this.houseEdit_Id > 0) {
      house.append('id', this.houseEdit_Id.toFixed());
    }
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
    if (this.houseForm.valid) {
      this.houseService.createHouse(house).subscribe(() => {
          this.houseForm.reset();
          $('#create-house').modal('hide');
          this.notificationService.showMessage('success', 'Create!!', 'Tạo mới thành công');
          this.getAllHouses();
        }, error => this.notificationService.showMessage('error', 'Xảy ra lỗi!', 'Vui lòng kiểm tra lại thông tin vừa nhập')
      );
    }
  }

  getHouseById(id) {
    this.showUploadListImage = false;
    this.houseService.getHouseById(id).subscribe((houseBE) => {
      this.houseEdit = houseBE;
      this.houseEdit_Id = id;
      this.nameControl.setValue(this.houseEdit.name);
      this.areaControl.setValue(this.houseEdit.area);
      this.cityControl.setValue(this.houseEdit.city);
      this.locationControl.setValue(this.houseEdit.location);
      this.bedroomControl.setValue(this.houseEdit.bedroom);
      this.bathroomControl.setValue(this.houseEdit.bathroom);
      this.priceControl.setValue(this.houseEdit.price);
      this.descriptionControl.setValue(this.houseEdit.description);
      this.statusHouseControl.setValue(this.houseEdit.statusHouse);
      this.typeControl.setValue(this.houseEdit.type);
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

  resetFormData() {
    this.houseForm.reset();
    this.showUploadListImage = true;
  }
}
