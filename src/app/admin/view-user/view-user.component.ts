import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user/user.service";
import {User} from "../../model/user";

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  users: User[] =[];

  user: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getAllUser();
  }



  getAllUser() {

    this.userService.getAllUser().subscribe((listUserFromBE)=>{
      this.users= listUserFromBE;
    })
  }

}
