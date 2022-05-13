import {Component, OnInit} from '@angular/core';
import {Profile} from '../../model/profile';
import {ProfileService} from '../../service/profile/profile.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/user';
import {ShareJSService} from '../../service/share/share-js.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  showInputavatar: boolean = false;
  profile: Profile = {};

  currentUser: any = {};

  constructor(private profileService: ProfileService,
              private shareJSService: ShareJSService) {
  }


  profileForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
    birthday: new FormControl('', [Validators.required, Validators.min(0)]),
    avatar: new FormControl(''),
    address: new FormControl('', [Validators.required]),
    phone: new FormControl(null),
    user: new FormControl(null)
  });


  getCurrentUser() {
    this.currentUser = localStorage.getItem('currentUser');
    this.currentUser = JSON.parse(this.currentUser);
    this.getProfile(this.currentUser.id);
    this.shareJSService.shareJS();
  }

  isShowInputavatar() {
    this.showInputavatar = !this.showInputavatar;
  }

  getProfile(id) {
    this.profileService.getProfileById(id).subscribe(profileBE => {
      this.profile = profileBE;
      this.phoneControl.setValue(this.profile.phone);

    });
  }


  get phoneControl() {
    return this.profileForm.get('phone');
  }


  ngOnInit() {
    this.getCurrentUser();
  }

  submitEditProfile() {

  }
}
