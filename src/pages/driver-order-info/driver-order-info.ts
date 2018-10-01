import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from "@ionic-native/call-number";

/**
 * Generated class for the DriverOrderInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driver-order-info',
  templateUrl: 'driver-order-info.html',
})
export class DriverOrderInfoPage {
  deptName: string = "dept";
  applicantName: string = "name";
  applicantPhone: string = "333111222";
  passengerCount: number = 3;
  orderComment: string = "yii";
  workDescrip: string = "nnnnnn";
  startTime: string = "2018/09/10";
  finishTime: string = "2018/09/11";
  returnTime: string = "2018/09/11";
  originAddress: string = "33321";
  anArray: any = [];
  index: number = 3;
  null: string = null;
  carType: string = "312";
  carBrand: string = "Pagani";
  plateNumber: string = "A123456";
  driverName: string = "mmn";
  phone: string = "3331111234";
  dispatcherComment: string = "3213";
  dispatcherShow: boolean = false;
  carInfoShow: boolean = true;
  driverInfoShow: boolean = true;
  cancelInfoShow: boolean = false;
  showReturnDrive: boolean = true;
  showFee: boolean = true;
  showParkingFeeInput: boolean = false;
  showStartDrive: boolean = false;
  showFinishDrive: boolean = false;
  showCancelSelector: boolean = false;
  showAcceptAndReject: boolean = false;
  mileage: string = "30";
  startMileage: string = "20";
  parkingFee: string = "0";
  true: string = "true";
  false: string = "false";
  constructor(public navCtrl: NavController, public navParams: NavParams, private callNum:CallNumber) {
    this.loop();
  }

  loop(){
    for(let i = 0; i < this.index; i++)
    {
      this.anArray[i] = "a1";
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverOrderInfoPage');
  }

  callNumber(phoneNum){
    this.callNum.callNumber(phoneNum, true);
  }
}
