import { Component, OnInit } from '@angular/core';
import {Profile} from "../../model/profile";
import {ProfileService} from "../../service/profile/profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profiles: Profile[] = [];

  constructor(private profileService: ProfileService) {
  }

  getAllProfile(){
    this.profileService.getAll().subscribe(profile => {
      this.profiles = profile;
    },error => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.getAllProfile();
  }

}
