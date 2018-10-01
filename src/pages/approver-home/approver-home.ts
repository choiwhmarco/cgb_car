import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApprovalOrderInfoPage } from "../approval-order-info/approval-order-info";

/**
 * Generated class for the ApproverHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-approver-home',
  templateUrl: 'approver-home.html',
})
export class ApproverHomePage {
  tabsIndex:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApproverHomePage');
  }

  switchTabs(index)
  {
    this.tabsIndex=index;
  }

  goback(){
    this.navCtrl.pop();
  }

  goOrderInfo(){
    this.navCtrl.push(ApprovalOrderInfoPage);
  }
}
