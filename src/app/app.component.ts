import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Storage} from '@ionic/storage';
import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public storage:Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    storage.ready().then(() => {
      storage.get('USER_INFO').then(
        (value: string) => {
          let isRemember = !!value ? JSON.parse(value).isRemember : false;
          if ( isRemember ) {
            this.rootPage = HomePage;
          } else {
            this.rootPage = LoginPage;
          }
        }
      );
    });
  }
}

