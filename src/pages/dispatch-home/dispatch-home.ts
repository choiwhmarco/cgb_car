import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DispatchHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dispatch-home',
  templateUrl: 'dispatch-home.html',
})
export class DispatchHomePage {
  tabsIndex:number = 0;
  DispatchedTask:number;
  dept:string;
  name:string;
  WaitingDispatcherTask:number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.DispatchedTask = 61;
    this.WaitingDispatcherTask = 0;
    this.dept="dept";
    this.name="name";
  }

  switchTabs(index){
    this.tabsIndex = index;
  }

  goback(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DispatchHomePage');
  }

}
