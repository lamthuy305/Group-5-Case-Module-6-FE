import { Component, OnInit } from '@angular/core';
import {House} from '../../model/house';
import {Type} from '../../model/type';
import {StatusHouse} from '../../model/status-house';
import {FormControl, FormGroup} from '@angular/forms';
import {TypeService} from '../../service/type/type.service';
import {HouseService} from '../../service/house/house.service';
import {StatusHouseService} from '../../service/statusHouse/status-house.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-edit-house',
  templateUrl: './edit-house.component.html',
  styleUrls: ['./edit-house.component.css']
})
export class EditHouseComponent implements OnInit {
  house: House = {};
  types: Type[] = [];
  statusHouses: StatusHouse[] = [];

  houseForm: FormGroup =  new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    area: new FormControl(''),
    location: new FormControl(''),
    bedroom: new FormControl(''),
    bathroom: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    img: new FormControl(''),
    count_rent: new FormControl(''),
    statusHouse: new FormControl(''),
    type: new FormControl(''),
    user: new FormControl(''),
  })

  constructor(private houseService: HouseService,
              private typeService: TypeService,
              private statusHouseService: StatusHouseService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.getHouseById(id);
    })
  }

  ngOnInit() {
    this.getAllStatus();
    this.getAllTypes()
  }

  getAllTypes()
  {
    this.typeService.getAll().subscribe((listType) => {
      this.types = listType;
    });
  }

  getAllStatus()
  {
    this.statusHouseService.getAll().subscribe((listStatus) => {
      this.statusHouses = listStatus;
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

  get descriptionControl(){
    return this.houseForm.get('description');
  }

  get imgControl(){
    return this.houseForm.get('img');
  }

  get count_rentControl() {
    return this.houseForm.get('count_rent');
  }

  get typeControl() {
    return this.houseForm.get('type');
  }

  get statusHouseControl(){
    return this.houseForm.get('statusHouse');
  }

  get userControl() {
    return this.houseForm.get('user');
  }

  getHouseById(id) {
    this.houseService.getHouseById(id).subscribe((houseFromBE) =>{
      this.house =  houseFromBE;
      this.idControl.setValue(this.house.id);
      this.nameControl.setValue(this.house.name);
      this.areaControl.setValue(this.house.area);
      this.locationControl.setValue(this.house.location);
      this.bedroomControl.setValue(this.house.bedroom);
      this.bathroomControl.setValue(this.house.bathroom);
      this.priceControl.setValue(this.house.price);
      this.descriptionControl.setValue(this.house.description);
      this.imgControl.setValue(this.house.img);
      this.count_rentControl.setValue(this.house.count_rent);
      this.typeControl.setValue(this.house.type);
      this.statusHouseControl.setValue(this.house.statusHouse);
      this.userControl.setValue(this.house.user.id)
    });
  }

  submit() {
    let house = this.houseForm.value;
    const formData: any = new FormData();
    formData.append('name', this.house.name);
    formData.append('area', this.house.area);
    formData.append('location', this.house.location);
    formData.append('bedroom', this.house.bedroom);
    formData.append('bathroom', this.house.bathroom);
    formData.append('price', this.house.price);
    formData.append('description', this.house.description);
    formData.append('img', ( <HTMLInputElement> document.getElementById('img')).files[0]);
    formData.append('count_rent', this.house.count_rent);
    formData.append('statusHouse', this.house.statusHouse);
    formData.append('type', this.house.type);
    formData.append('user', this.house.user.id);
    this.houseService.editHouse(this.house.id, formData).subscribe(() => {
      alert('Sửa thành công!');
      this.router.navigateByUrl('/houses');
    });
  }
}
