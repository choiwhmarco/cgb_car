import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UseCarCountPage } from "../use-car-count/use-car-count";

/**
 * Generated class for the ReportTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report-table',
  templateUrl: 'report-table.html',
})
export class ReportTablePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportTablePage');
  }

  goUseCarCount(){
    this.navCtrl.push(UseCarCountPage);
  }
}
