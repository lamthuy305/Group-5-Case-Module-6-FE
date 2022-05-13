import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {User} from "../../model/user";
import {Router} from "@angular/router";
import {AuthService} from '../../service/auth/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  users: User[] = [];
  user: any;
  message: string = null;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.getAllUser();
    this.changePasswordForm = this.fb.group({
      username: '',
      password: '',
      confirmPassword: ''
    })

  }

  changePassword() {
    this.user = {
      username: this.changePasswordForm.value.username,
      passwordForm: {
        password: this.changePasswordForm.value.password,
        confirmPassword: this.changePasswordForm.value.confirmPassword
      }
    }
    for (let user of this.users) {
      if ((user.username !== this.user.username)||(user.password!==this.user.password)){
        this.message = 'Tài khoản hoặc mật khẩu không đúng!';
        break;
      }
    }
    this.authService.changePassword(this.user).subscribe(()=>{
      this.router.navigateByUrl('/login');
    })
  }

  getAllUser() {
    this.authService.getAllUser().subscribe((listUserFromBE) =>
      this.users = listUserFromBE);
  }
}
