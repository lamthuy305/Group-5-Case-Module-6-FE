import { Component, OnInit } from '@angular/core';
import {House} from '../../model/house';
import {Type} from '../../model/type';
import {StatusHouse} from '../../model/status-house';
import {HouseService} from '../../service/house/house.service';
import {TypeService} from '../../service/type/type.service';
import {StatusHouseService} from '../../service/statusHouse/status-house.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-house',
  templateUrl: './list-house.component.html',
  styleUrls: ['./list-house.component.css']
})
export class ListHouseComponent implements OnInit {
  houses: House[] = [];
  types: Type[] = [];
  statusHouses: StatusHouse[] = [];
  house: House = {};
  currentUser: any = {};
  currentUser_id: any = {};

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
              private router: Router) {
  }

  ngOnInit() {
    this.getCurrentUser();
    this.getAllStatusHouse();
    this.getAllTypes();
    this.getAllHouses();
  }

  getCurrentUser() {
    this.currentUser = localStorage.getItem('currentUser');
    this.currentUser = JSON.parse(this.currentUser);
  }


    getAllHouses() {
    this.houseService.getAll().subscribe((listHouse) => {
      this.houses = listHouse;
    }, error => {
      console.log(error);
    });
  }

  getAllTypes() {
    this.typeService.getAll().subscribe((listType) => {
      this.types = listType;
    })
  }

  getAllStatusHouse() {
    this.statusHouseService.getAll().subscribe((listStatusOfHouse) => {
      this.statusHouses = listStatusOfHouse;
    }, error => {
      console.log(error)
    });
  }

  delete(id) {
    this.houseService.deleteHouse(id).subscribe(() => {
      alert('Xóa thành công');
    })
  }

  createHouse(){
    const house = new FormData();
    house.append('name', this.houseForm.value.name);
    house.append('area', this.houseForm.value.area);
    house.append('location', this.houseForm.value.location);
    house.append('bedroom', this.houseForm.value.bedroom);
    house.append('bathroom', this.houseForm.value.bathroom);
    house.append('price', this.houseForm.value.price);
    house.append('description', this.houseForm.value.description);
    house.append('img', ( <HTMLInputElement> document.getElementById('img')).files[0]);
    house.append('count_rent', this.houseForm.value.count_rent);
    house.append('statusHouse', this.houseForm.value.statusHouse);
    house.append('type', this.houseForm.value.type);
    this.currentUser_id = {
      id: this.currentUser.id
    }
    house.append('user', this.currentUser_id);
    if (this.houseForm.valid){
      this.houseService.createHouse(house).subscribe(() => {
        alert('Success!');
        this.router.navigateByUrl('/admin/house');
      });
    }
  }
}
