import {Component, OnInit} from '@angular/core';
import {Profile} from '../../model/profile';
import {ProfileService} from '../../service/profile/profile.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../model/user';
import {ShareJSService} from '../../service/share/share-js.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NotificationService} from '../../service/notification/notification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  showInputavatar: boolean = false;
  // birthdayFE: any = {};
  profile: Profile = {};
  currentUser: any = {};

  // returnURL: string;

  constructor(private profileService: ProfileService,
              private shareJSService: ShareJSService,
              private router: Router,
              private notificationService: NotificationService) {
  }


  profileForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    birthday: new FormControl(''),
    avatar: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(),
    phone: new FormControl(),
    user: new FormControl()
  });


  getCurrentUser() {
    this.currentUser = localStorage.getItem('currentUser');
    this.currentUser = JSON.parse(this.currentUser);
    this.getProfile(this.currentUser.id);
    console.log(this.currentUser.id)
    console.log(this.profile)
  }


  isShowInputavatar() {
    this.showInputavatar = !this.showInputavatar;
  }

  getProfile(id) {
    this.profileService.getProfileByUserId(id).subscribe(profileBE => {
      this.profile = profileBE;
      this.phoneControl.setValue(this.profile.phone);
      this.addressControl.setValue(this.profile.address);
      this.nameControl.setValue(this.profile.name);
      this.emailControl.setValue(this.profile.email);
      this.birthdayControl.setValue(this.profile.birthday);
    });
  }


  get phoneControl() {
    return this.profileForm.get('phone');
  }

  get addressControl() {
    return this.profileForm.get('address');
  }

  get nameControl() {
    return this.profileForm.get('name');
  }

  get birthdayControl() {
    return this.profileForm.get('birthday');
  }

  get emailControl() {
    return this.profileForm.get('email');
  }


  ngOnInit() {
    this.getCurrentUser();
  }


  submitEditProfile() {

    let formData = new FormData();
    formData.append('name', this.profileForm.value.name);
    formData.append('birthday', this.profileForm.value.birthday);
    if (this.showInputavatar) {
      const files = (document.getElementById('avatar') as HTMLInputElement).files;
      if (files.length > 0) {
        formData.append('avatar', files[0]);
      }
    }
    formData.append('address', this.profileForm.value.address);
    formData.append('email', this.profileForm.value.email);
    formData.append('phone', this.profileForm.value.phone);

    console.log(formData);

    this.profileService.editProfile(this.currentUser.id, formData).subscribe(() => {
      this.notificationService.showMessage('success', 'Edit!', 'Chỉnh sửa thành công');
      this.getProfile(this.currentUser.id);

    }, error => this.notificationService.showMessage('error', 'Edit!', 'Chỉnh sửa lỗi'));

  }


}
