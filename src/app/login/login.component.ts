import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {};

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private loginService: AuthService) {
  }

  ngOnInit() {
  }

  login() {
    this.user = this.loginForm.value;
    this.loginService.login(this.user).subscribe(()=>{

    })
  }
}
