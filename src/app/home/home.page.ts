import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  storage: string;
  signup: any;

  constructor() {
    this.storage = localStorage.getItem('loginDetails');
    console.log('storage', JSON.parse(this.storage));
    this.signup = JSON.parse(this.storage);
  }

}
