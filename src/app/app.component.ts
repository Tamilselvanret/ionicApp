import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Statistics',
      url: '/statistics',
      icon: 'list'
    },
    {
      title: 'Maintenance',
      url: '/maintenance',
      icon: 'list'
    },
    {
      title: 'Problem Crisis',
      url: '/problem-crisis',
      icon: 'list'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'list'
    },

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router ,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit(){
    if(localStorage.getItem('alreadyLoggedIn')){
      this.router.navigate(['/home']);
    }else{
      this.router.navigate(['/login']);
      
    }
  }
  
  logout(){
    localStorage.removeItem('alreadyLoggedIn');
    this.router.navigate(['/login']);
  }
  deactivate(){
    localStorage.clear();
    this.router.navigate(['/signup']);
  }
}
