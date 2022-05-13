import {Component, OnInit} from '@angular/core';
import {Profile} from "../../model/profile";
import {ProfileService} from "../../service/profile/profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile = {};

  currentUser: any = {};

  constructor(private profileService: ProfileService) {
  }


  getcurrentUser() {
    this.currentUser = localStorage.getItem('currentUser');
    this.currentUser = JSON.parse(this.currentUser);
  }

  getProfile(id) {
    this.profileService.getProfileById(id).subscribe(profileBE => {
      this.profile = profileBE;
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.getcurrentUser();
  }

}
