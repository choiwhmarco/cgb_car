import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChooseCarPage } from "../choose-car/choose-car";

/**
 * Generated class for the ApplyCarConsumeLogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apply-car-consume-log',
  templateUrl: 'apply-car-consume-log.html',
})
export class ApplyCarConsumeLogPage {
  myDate:string=null;
  choosedType:string="wash";
  wash:string="wash";
  gas:string="gas";
  choosedIsDriving:string="no";
  yes:string="yes";
  no:string="no";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myDate=new Date(new Date().getTime()+8*60*60*1000).toISOString();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplyCarConsumeLogPage');
  }

  goChooseCar(){
    this.navCtrl.push(ChooseCarPage);
  }
}
