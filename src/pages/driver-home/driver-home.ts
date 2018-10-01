import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DriverOrderInfoPage } from "../driver-order-info/driver-order-info";

/**
 * Generated class for the DriverHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driver-home',
  templateUrl: 'driver-home.html',
})
export class DriverHomePage {
  tabsIndex:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverHomePage');
  }

  goback(){
    this.navCtrl.pop();
  }

  switchTabs(index){
    this.tabsIndex=index;
  }
  goOrderInfo(){
    this.navCtrl.push(DriverOrderInfoPage);
  }
}
