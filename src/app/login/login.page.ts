import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../common-services/alert.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: any;
  storage: string;
  signup: any;
  isLogin: boolean;
  constructor(
    public fb: FormBuilder,
    public router: Router,
    public alert: AlertService,

  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      name: null,
      password: null
    });
  }
  
  ionViewWillEnter() {

    this.storage = localStorage.getItem('loginDetails');
    console.log('storage', JSON.parse(this.storage));
    this.signup = JSON.parse(this.storage);

  }


  login(res) {
    console.log('res', res);

    if (res.password == this.signup.password && res.name == this.signup.name) {
      this.router.navigate(['/home']);
      let isLogin = true;
      localStorage.setItem('alreadyLoggedIn', JSON.stringify(isLogin))
      this.loginForm.reset();
    } else {
      this.alert.show('Invalid Credentials !');
      this.loginForm.reset();

    }
  }


  register() {
    this.router.navigate(['/signup']);

  }

}
