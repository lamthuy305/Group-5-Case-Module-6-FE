import {Component, OnInit} from '@angular/core';
import {Profile} from "../../model/profile";
import {FormControl, FormGroup} from "@angular/forms";
import {ProfileService} from "../../service/profile/profile.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  profiles: Profile = {};

  imageFile: File;

  profileForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    birthday: new FormControl(),
    avatar: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    phone: new FormControl()
    }
  )

  constructor(private profileService: ProfileService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.getProfile(id);
    })
  }

  ngOnInit() {
  }

  editProfile(id: number) {
    const profile = this.profileForm.value;
    this.profileService.editProfile(id,profile).subscribe(() =>{
      alert("Cập nhật thành công");
    }, e => {
      console.log(e);
    });
  }

  getProfile(id: number){
    this.profileService.getProfileById(id).subscribe(profile => {
      this.profiles = profile;
      return this.profileForm.get('id').setValue(this.profiles.id),
        this.profileForm.get('name').setValue(this.profiles.name),
        this.profileForm.get('birthday').setValue(this.profiles.birthday),
        this.profileForm.get('avatar').setValue(this.profiles.avatar),
        this.profileForm.get('email').setValue(this.profiles.email),
        this.profileForm.get('address').setValue(this.profiles.address),
        this.profileForm.get('phone').setValue(this.profiles.phone),
        this.profileForm.get('user').setValue(this.profiles.user)
    });
  }
}
