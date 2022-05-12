import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/user";
import {AuthService} from '../../service/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {};
  formRegister: FormGroup = new FormGroup({
    username: new FormControl('',[Validators.required]),
    numberPhone: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required,Validators.pattern('^(?=.*)(?=.*).{6,8}$')]),
    confirmPassword: new FormControl('',[Validators.required]),
  });


  get UsernameControl() {
    return this.formRegister.get('username')
  };

  get numberPhoneControl() {
    return this.formRegister.get('numberPhone')
  }

  get passwordControl() {
    return this.formRegister.get('password')
  }

  get confirmPasswordControl() {
    return this.formRegister.get('confirmPassword')
  }

  constructor(private registerService: AuthService) { }

  ngOnInit() {
  }


  register() {
    this.user= this.formRegister.value;
  }

}
