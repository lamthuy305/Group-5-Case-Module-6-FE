
import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth/auth.service';
import {NotificationService} from "../../service/notification/notification.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any = {};
  formRegister: FormGroup;
  message: string = null;
  users: User[] = [];


  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router,
              private notification: NotificationService) {

  }

  ngOnInit() {
    this.getAllUser();

    this.formRegister = this.fb.group({
      username: ['', [Validators.required]],
      numberPhone: ['', [Validators.required,Validators.pattern('^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*)(?=.*).{6,8}$')]],
      confirmPassword: [''],
    });

  }



  register() {
    this.user = {
      username: this.formRegister.value.username,
      numberPhone: this.formRegister.value.numberPhone,
      passwordForm: {
        password: this.formRegister.value.password,
        confirmPassword: this.formRegister.value.confirmPassword
      }


    };
    for (let user of this.users) {
      if (user.username === this.user.username.toLowerCase()) {
        this.message = 'Tài khoản đã tồn tại!';
        break;
      }
    }

    this.authService.register(this.user).subscribe(() => {
      this.notification.showMessage('success','CREATED','Đăng ký thành công!')
      this.router.navigateByUrl('/login');
    }, error => {
    })
  }

  getAllUser() {
    this.authService.getAllUser().subscribe((listUserFromBE) =>
      this.users = listUserFromBE);
  }

}
