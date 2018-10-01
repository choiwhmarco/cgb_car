import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DealCarPeccancyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deal-car-peccancy',
  templateUrl: 'deal-car-peccancy.html',
})
export class DealCarPeccancyPage {
  tabsIndex:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DealCarPeccancyPage');
  }

  switchTabs(index){
    this.tabsIndex=index;
  }
  goback(){
    this.navCtrl.pop();
  }

}
