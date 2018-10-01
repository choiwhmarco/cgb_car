import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChooseDriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choose-driver',
  templateUrl: 'choose-driver.html',
})
export class ChooseDriverPage {
  name:string;
  year:string;
  rating:number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name="123"
    this.year="1";
    this.rating=4.7;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseDriverPage');
  }

}
