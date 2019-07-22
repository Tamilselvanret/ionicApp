import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../common-services/alert.services';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {


  registerForm: any;
  constructor(
    public fb: FormBuilder,
    public router: Router,
    public alert: AlertService,

  ) { }


  ngOnInit() {
    this.registerForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required]
    })
  }

  loginRedirecTo() {
    this.router.navigate(['/login']);
  }

  registerSuccess(userData) {
    if (this.registerForm.valid) {
      console.log('data', userData);
      localStorage.setItem('loginDetails',JSON.stringify(userData));      
      this.router.navigate(['/login']);
    } else {
      this.alert.show('Required all fields !')
    }
  }

  register(userData) {
    if (userData.password == userData.confirmPassword) {
      this.registerSuccess(userData);
    } else {
      this.alert.show('Password does not match !');
    }
  }



}
