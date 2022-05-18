import {Component, OnInit} from '@angular/core';
import {Profile} from '../../model/profile';
import {ProfileService} from '../../service/profile/profile.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ShareJSService} from '../../service/share/share-js.service';
import {Router} from '@angular/router';
import {NotificationService} from '../../service/notification/notification.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  showInputavatar: boolean = false;
  profile: Profile = {};
  currentUser: any = {};
  selectedFile: File[] = [];
  filePath: string = '';


  constructor(private profileService: ProfileService,
              private shareJSService: ShareJSService,
              private router: Router,
              private notificationService: NotificationService) {
  }


  profileForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required]),
    avatar: new FormControl(''),
    address: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required,
      Validators.pattern(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/)]
    ),
    user: new FormControl()
  });

  changeFile($event) {
    this.selectedFile = $event.target.files;
    for (let i = 0; i < this.selectedFile.length; i++) {
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.filePath = reader.result as string;
    };
    reader.readAsDataURL(this.selectedFile[0]);
  }

  getCurrentUser() {
    this.currentUser = localStorage.getItem('currentUser');
    this.currentUser = JSON.parse(this.currentUser);
    this.getProfile(this.currentUser.id);
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
    if (this.profileForm.valid) {
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
      this.profileService.editProfile(this.currentUser.id, formData).subscribe(() => {
        this.showInputavatar = false;
        this.notificationService.showMessage('success', 'Edit!', 'Chỉnh sửa thành công');
        this.getProfile(this.currentUser.id);
      }, error => this.notificationService.showMessage('error', 'Edit!', 'Chỉnh sửa lỗi'));
    } else {
      this.notificationService.showMessage('error', 'Edit!', 'Chỉnh sửa lỗi');
    }
  }

}
