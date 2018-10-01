import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DealCarConsumeLogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deal-car-consume-log',
  templateUrl: 'deal-car-consume-log.html',
})
export class DealCarConsumeLogPage {

  tabsIndex:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DealCarConsumeLogPage');
  }

  switchTabs(index){
    this.tabsIndex = index;
  }

  goback(){
    this.navCtrl.pop();
  }
}
