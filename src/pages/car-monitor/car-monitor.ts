import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from "ionic-angular";

declare var AMap;
/**
 * Generated class for the CarMonitorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-car-monitor',
  templateUrl: 'car-monitor.html',
})
export class CarMonitorPage {
  @ViewChild('map_container') map_container2: ElementRef;
  map: any;
  scheduled:number;
  doing:number;
  id:any=123321;
  plateNumber:any="33312";
  driverName:any = "hi";
  wholeinfo:string;
  //地图对象

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
    this.getInfo();
    this.wholeinfo = '单号:' + this.id + '\n' +
                     '司机:' + this.driverName + '\n' +
                     '车牌:' + this.plateNumber;
  }

  showAlert(){
    let alert = this.alertCtrl.create({
      title: this.wholeinfo,
      buttons: ['确定']
    });
    alert.present()
  }



  getInfo(){
    this.id = "4695";
    this.driverName = "司机01";
    this.plateNumber = "A34567";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarMonitorPage');
  }

  ionViewDidEnter() {
    this.load();
  }
  load(){
    this.map = new AMap.Map(this.map_container2.nativeElement, {
      view: new AMap.View2D({//创建地图二维视口
        center:[113.350912,23.119495],
        zoom: 16, //设置地图缩放级别
        rotateEnable: true,
        showBuildingBlock: true
      })
    });
  }


}
