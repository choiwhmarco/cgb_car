import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApplyCarPeccancyPage } from "../apply-car-peccancy/apply-car-peccancy";

/**
 * Generated class for the CarPeccancyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-car-peccancy',
  templateUrl: 'car-peccancy.html',
})
export class CarPeccancyPage {
  name:string;
  dept:string;
  tabsIndex:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name="name";
    this.dept="dept";
  }

  switchTabs(index){
    this.tabsIndex = index;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CarPeccancyPage');
  }

  goback(){
    this.navCtrl.pop();
  }

  carPeccancyApply(){
    this.navCtrl.push(ApplyCarPeccancyPage);
  }
}
