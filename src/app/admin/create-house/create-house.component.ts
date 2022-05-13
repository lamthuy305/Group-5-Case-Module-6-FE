import { Component, OnInit } from '@angular/core';
import {House} from '../../model/house';
import {StatusHouse} from '../../model/status-house';
import {Type} from '../../model/type';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {HouseService} from '../../service/house/house.service';
import {TypeService} from '../../service/type/type.service';
import {StatusHouseService} from '../../service/statusHouse/status-house.service';

@Component({
  selector: 'app-create-house',
  templateUrl: './create-house.component.html',
  styleUrls: ['./create-house.component.css']
})
export class CreateHouseComponent implements OnInit {
  types: Type[] = [];
  statusHouses: StatusHouse[] = [];
  house: House = {
    type: null,
    statusHouse: null
  };

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

  constructor(private typeService: TypeService,
              private statusHouseService: StatusHouseService,
              private houseService: HouseService,
              private router: Router) { }

  ngOnInit() {
    this.getAllStatus();
    this.getAllTypes();
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

  createHouse(){
    const house = new FormData();
    house.append('name', this.houseForm.value.name);
    house.append('area', this.houseForm.value.area);
    house.append('location', this.houseForm.value.location);
    house.append('bedroom', this.houseForm.value.bedroom);
    house.append('bathroom', this.houseForm.value.bathroom);
    house.append('price', this.houseForm.value.price);
    house.append('description', this.houseForm.value.description);
    house.append('img', this.houseForm.value.img);
    house.append('count_rent', this.houseForm.value.count_rent);
    house.append('statusHouse', this.houseForm.value.statusHouse);
    house.append('type', this.houseForm.value.type);
    house.append('user', this.houseForm.value.user.id);
    if ( this.houseForm.valid){
      this.houseService.createHouse(house).subscribe(() => {
        alert('Success!');
        this.router.navigateByUrl('/houses');
      });
    }
  }
}
