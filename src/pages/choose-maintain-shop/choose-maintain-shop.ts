import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChooseMaintainShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choose-maintain-shop',
  templateUrl: 'choose-maintain-shop.html',
})
export class ChooseMaintainShopPage {
  name:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name="name";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseMaintainShopPage');
  }

}
