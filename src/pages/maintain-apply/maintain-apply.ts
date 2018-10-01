import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddMaintainOrderPage } from "../add-maintain-order/add-maintain-order";

/**
 * Generated class for the MaintainApplyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maintain-apply',
  templateUrl: 'maintain-apply.html',
})
export class MaintainApplyPage {
  tabsIndex:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaintainApplyPage');
  }
  switchTabs(index)
  {
    this.tabsIndex = index;
  }
  goback(){
    this.navCtrl.pop();
  }
  addOrder(){
    this.navCtrl.push(AddMaintainOrderPage);
  }
}
