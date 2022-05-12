import { Component, OnInit } from '@angular/core';
import {House} from '../../model/house';
import {Type} from '../../model/type';
import {StatusHouse} from '../../model/status-house';
import {HouseService} from '../../service/house/house.service';
import {TypeService} from '../../service/type/type.service';
import {StatusHouseService} from '../../service/statusHouse/status-house.service';

@Component({
  selector: 'app-list-house',
  templateUrl: './list-house.component.html',
  styleUrls: ['./list-house.component.css']
})
export class ListHouseComponent implements OnInit {
  houses: House[] = [];
  types: Type[] = [];
  statusHouses: StatusHouse[] = [];

  constructor(private houseService: HouseService,
              private typeService: TypeService,
              private statusHouseService: StatusHouseService) {
  }

  ngOnInit() {
    this.getAllStatusHouse();
    this.getAllTypes();
    this.getAllHouses();
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
}
