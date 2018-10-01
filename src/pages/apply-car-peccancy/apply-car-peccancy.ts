import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChooseCarPage } from "../choose-car/choose-car";
import { ChooseDriverPage } from "../choose-driver/choose-driver";

/**
 * Generated class for the ApplyCarPeccancyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apply-car-peccancy',
  templateUrl: 'apply-car-peccancy.html',
})
export class ApplyCarPeccancyPage {
  name:string;
  plateNumber:string;
  carType:string;
  myDate:string=null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name="name";
    this.plateNumber="123";
    this.carType="12321";
    this.myDate=new Date(new Date().getTime()+8*60*60*1000).toISOString();
  }


  goChooseCar(){
    this.navCtrl.push(ChooseCarPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplyCarPeccancyPage');
  }
  goChooseDriver(){
    this.navCtrl.push(ChooseDriverPage);
  }
}
