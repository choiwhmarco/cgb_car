import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChooseCarPage } from "../choose-car/choose-car";
import { ChooseMaintainShopPage } from "../choose-maintain-shop/choose-maintain-shop";

/**
 * Generated class for the AddMaintainOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-maintain-order',
  templateUrl: 'add-maintain-order.html',
})
export class AddMaintainOrderPage {
  choosedCheck:string="repair";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMaintainOrderPage');
  }

  goChooseCar(){
    this.navCtrl.push(ChooseCarPage);
  }
  goChooseMaintainShop(){
    this.navCtrl.push(ChooseMaintainShopPage);
  }
}
