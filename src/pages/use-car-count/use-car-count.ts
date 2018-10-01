import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChooseStatusPage } from "../choose-status/choose-status";

/**
 * Generated class for the UseCarCountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-use-car-count',
  templateUrl: 'use-car-count.html',
})
export class UseCarCountPage {

  statusList: any = null;
  id: string = "123";
  applicantName: string = "nnnqw";
  startTime: string = '01/12 12:30';
  statusString: string = "active";
  startDate: Date;
  endDate: Date;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UseCarCountPage');
  }

  callback = data => {
    this.statusList = data;
  };

  goChooseStatus(){
    this.navCtrl.push(ChooseStatusPage, {callback: this.callback});
  }

}
