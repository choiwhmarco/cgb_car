import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommentPage } from "../comment/comment";
import { ApplydoPage } from "../applydo/applydo";

/**
 * Generated class for the ApplyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apply',
  templateUrl: 'apply.html',
})
export class ApplyPage {
  tabsIndex: number = 0;
  myDate1: string = null;
  myDate2: string = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myDate1 =  new Date().toISOString();
    this.myDate2 = new Date().toISOString();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplyPage');
  }

  goback(){
    this.navCtrl.pop();
  }

  switchTabs(index)
  {
    this.tabsIndex = index;
  }

  carApply(){
    this.navCtrl.push(ApplydoPage);
  }

  goComment(){
    this.navCtrl.push(CommentPage);
  }
}
