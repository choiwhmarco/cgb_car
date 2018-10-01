import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChooseDestinationPage } from "../choose-destination/choose-destination";
import { ChooseOriginPage } from "../choose-origin/choose-origin";
import { ChooseOrderCommentPage } from "../choose-order-comment/choose-order-comment";

/**
 * Generated class for the AddRegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-registration',
  templateUrl: 'add-registration.html',
})
export class AddRegistrationPage {
  gaming: string = "n64";
  myDate: string = null;
  data: boolean = false;
  anArray: any = [];
  index: number = 1;
  one: number = 1;
  empty: any;
  destinationIndex: number = 0;
  dataFromOtherPage = null;
  oAddress = null;
  dAddress: any = [];
  flag: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myDate = new Date(new Date().getTime()+8*60*60*1000).toISOString();
    if (this.flag == true) {
      this.anArray.push({'value': ''});
      this.oAddress = "请输入地点";
    }
    this.anArray[this.anArray.length - 1] = "请输入地点";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddRegistrationPage');

  }


  goTo(){
    this.data = true;
  }

  destination(index){
      this.destinationIndex = index;
      this.navCtrl.push(ChooseDestinationPage, {dest: this.destAdd});
  }

  removeDestination(index){
    this.anArray.splice(index,1);
    this.destinationIndex--;
  }

  addDestination(){
    this.anArray.push({'value':''});
    this.destinationIndex++;
    this.anArray[this.destinationIndex] = "请输入地点";
  }

  destAdd = destData => {
    this.anArray[this.destinationIndex] = destData;
  }

  originAdd = originData => {
    this.oAddress = originData;
  };

  origin(){
    this.navCtrl.push(ChooseOriginPage, {item: this.originAdd});
  }

  callback = data => {
    this.dataFromOtherPage = data;
    alert(this.dataFromOtherPage);
    console.log('data received from other page', this.dataFromOtherPage);
  };


  goChooseOrderComment(){
    this.navCtrl.push(ChooseOrderCommentPage,{firstPassed:"registration", callback:this.callback});
  }



}
