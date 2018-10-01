import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApplyCarConsumeLogPage } from "../apply-car-consume-log/apply-car-consume-log";

/**
 * Generated class for the CarConsumeLogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-car-consume-log',
  templateUrl: 'car-consume-log.html',
})
export class CarConsumeLogPage {
  tabsIndex:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarConsumeLogPage');
  }

  switchTabs(index){
    this.tabsIndex=index;
  }
  goback(){
    this.navCtrl.pop();
  }
  carConsumeLogApply(){
    this.navCtrl.push(ApplyCarConsumeLogPage);
  }
}
