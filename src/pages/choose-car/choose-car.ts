import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChooseCarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choose-car',
  templateUrl: 'choose-car.html',
})
export class ChooseCarPage {
  platenumber:any=null;
  cartype:any=null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.platenumber='AAA123';
    this.cartype='123';
  }

  public selectAll(event): void { event.inputElement.select(); }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseCarPage');
  }


}
