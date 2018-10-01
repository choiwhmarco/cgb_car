import { Component } from '@angular/core';
import { DateTime, IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ApprovalOrderInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-approval-order-info',
  templateUrl: 'approval-order-info.html',
})
export class ApprovalOrderInfoPage {

  deptName: string = "ddd";
  applicantName: string = "mmim";
  passengerCount: number = 3;
  orderComment: string = "333";
  workDescrip: string = "Hjj";
  null: string = null;
  startTime: string = "2008/12/30";
  finishTime: string = "2009/12/30";
  originAddress: string = "333";
  anArray: any = [];
  index: number = 3;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loop();
  }

  loop(){
    for(let i = 0; i < this.index; i++)
    {
      this.anArray[i] = "a1";
    }

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ApprovalOrderInfoPage');
  }

}
