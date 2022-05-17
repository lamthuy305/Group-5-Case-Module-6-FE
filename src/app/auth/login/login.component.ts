import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth/auth.service';
import {User} from "../../model/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  users: User[] = [];
  user: any;
  // isInvalid: boolean = false;

  message: string = null;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.getAllUser();
  }

  login() {

    console.log(this.loginForm.get('username').value);
    console.log(this.loginForm.get('password').value);

    this.authService.login(this.loginForm.get('username').value, this.loginForm.get('password').value).subscribe((res) => {
      this.router.navigateByUrl('/home');
    }, error => {
      for (let user of this.users) {
        if (user.username === this.loginForm.get('username').value && user.active == false) {
          this.message = 'Tài khoản đã bị khóa, liên hệ Admin Tình,Sđt:113 để lấy lại tài khoản!';
          return this.message;
        }
        this.message = 'Tài khoản hoặc mật khẩu không đúng!'
      }

    });
  }

  getAllUser() {
    this.authService.getAllUser().subscribe((listUserFromBE) =>
      this.users = listUserFromBE);
  }


}
