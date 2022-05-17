import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/user";
import {Router} from "@angular/router";
import {NotificationService} from "../../service/notification/notification.service";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  currentUser: any;
  users: User[] = [];
  user: any;
  message: string = null;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router,
              private notification: NotificationService) {
  }

  ngOnInit() {
    this.getCurrentUser();
    this.changePasswordForm = this.fb.group({
      username: '',
      currentPassword: '',
      password: ['', [Validators.required, Validators.pattern('^(?=.*)(?=.*).{6,8}$')]],
      confirmPassword: ''

    })
  }

  getCurrentUser() {
    this.currentUser = localStorage.getItem('currentUser');
    this.currentUser = JSON.parse(this.currentUser);
  }

  changePassword() {
    this.user = {
      username: this.currentUser.username,
      currentPassword: this.changePasswordForm.value.currentPassword,
      passwordForm: {
        password: this.changePasswordForm.value.password,
        confirmPassword: this.changePasswordForm.value.confirmPassword
      }
    }


    this.authService.changePassword(this.user).subscribe(() => {
      this.notification.showMessage('success', 'OK!', 'Đổi mật khẩu thành công!')
      this.router.navigateByUrl('/home');
    }, error => {
      this.notification.showMessage('error', ':((!', 'Mật khẩu hiện tại không đúng!')
    })

  }

  // getAllUser() {
  //   this.authService.getAllUser().subscribe((listUserFromBE) =>
  //     this.users = listUserFromBE);
  // }
}
