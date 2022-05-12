import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {User} from "../../model/user";
import {min} from "rxjs/operators";
import {Router} from "@angular/router";

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
              private router: Router) {

  }

  ngOnInit() {
    this.getAllUser();

    this.formRegister = this.fb.group({
      username: ['', [Validators.required]],
      numberPhone: ['', [Validators.required]],
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
      this.router.navigateByUrl('/login');
    }, error => {
    })
  }

  getAllUser() {
    this.authService.getAllUser().subscribe((listUserFromBE) =>
      this.users = listUserFromBE);
  }

}
