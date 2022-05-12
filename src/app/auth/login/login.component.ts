import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../../model/user";
import {Router} from "@angular/router";
import {AuthService} from '../../service/auth/auth.service';

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

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.user = this.loginForm.value;
    this.authService.login(this.user).subscribe((currentUser) => {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      this.isInvalid=false;
      this.router.navigateByUrl('/home');
    }, error => {
      this.isInvalid=true;
    })
  }

}
