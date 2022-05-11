import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {User} from "../model/user";

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
  isInvalid: boolean= false;

  constructor(private loginService: AuthService) {
  }

  ngOnInit() {
  }

  login() {
    this.user = this.loginForm.value;
    this.loginService.login(this.user).subscribe((currentUser) => {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      this.isInvalid=false;
    }, error => {
      this.isInvalid=true;
    })
  }

}
