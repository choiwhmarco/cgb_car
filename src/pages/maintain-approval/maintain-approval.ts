import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MaintainApprovalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maintain-approval',
  templateUrl: 'maintain-approval.html',
})
export class MaintainApprovalPage {

  tabsIndex:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaintainApprovalPage');
  }

  goback(){
    this.navCtrl.pop();
  }
  switchTabs(index){
    this.tabsIndex = index;
  }
}
