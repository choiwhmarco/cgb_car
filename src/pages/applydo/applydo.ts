import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChooseOrderCommentPage } from "../choose-order-comment/choose-order-comment";
import { ChooseDestinationPage } from "../choose-destination/choose-destination";
import { ChooseOriginPage } from "../choose-origin/choose-origin";
import { AlertController } from "ionic-angular/";
import { ChooseDriverPage } from "../choose-driver/choose-driver";

/**
 * Generated class for the ApplydoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-applydo',
  templateUrl: 'applydo.html',
})
export class ApplydoPage {
  myDate:string=null;
  destinationIndex:number=1;
  anArray:any=[];
  dataFromOtherPage=null;
  useType:string="public";
  useTime:string="threehour";
  choosedDriver:string="self";
  pick:string="pickDriver";
  data:any;
  startIndex: number = 1;
  flag:number=0;
  zero:number=0;
  one:number=1;
  flagDriver:number=0;
  flagB: boolean = true;
  oAddress: any;


  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {
    this.myDate=new Date(new Date().getTime()+8*60*60*1000).toISOString();
    if (this.flagB == true) {
      this.anArray.push({'value': ''});
      this.oAddress = "请输入地点";
    }
    this.anArray[this.anArray.length - 1] = "请输入地点";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplydoPage');
  }

  destination(index){
    this.destinationIndex=index;
    this.navCtrl.push(ChooseDestinationPage, {dest: this.destAddress});
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

  destAddress = destData => {
    this.anArray[this.destinationIndex] = destData;
  }

  originAddress = originData => {
    this.oAddress = originData;
  };

  origin(){
    this.navCtrl.push(ChooseOriginPage, {item: this.originAddress});
  }
  callback = data => {
    this.dataFromOtherPage = data;
    console.log('data received from other page', this.dataFromOtherPage);
  };

  goChooseOrderComment(){
    this.navCtrl.push(ChooseOrderCommentPage,{callback:this.callback});
  }

  doPrompt() {
    let prompt = this.alertCtrl.create({

      inputs: [
        {
          name: 'input',
          placeholder: '请输入用车天数，单位（天）'
        },
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('取消');
          }
        },
        {
          text: '确定',
          handler: data => {
            if(data.input > 31 || data.input < 1)
            {
              alert('请输入有效时间');
              return;
            }
            else {
              this.data = data.input;
              this.flag = 1;
              this.useTime = "customday";
            }
          }
        }
      ]
    });
    prompt.present();
  }

  onChange($event){
    if(this.choosedDriver==this.pick)
    {
      this.chooseDriver();
    }
  }

  chooseDriver(){
    this.navCtrl.push(ChooseDriverPage);
  }
}
