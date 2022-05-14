import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth/auth.service';

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
  isInvalid: boolean = false;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    console.log(this.loginForm.get('username').value);
    console.log(this.loginForm.get('password').value);
    this.authService.login(this.loginForm.get('username').value, this.loginForm.get('password').value).subscribe(() => {
      this.isInvalid = false;
      this.router.navigateByUrl('/home');
    }, error => {
      this.isInvalid = true;
    });
  }

}
