import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { GlobalData } from "../../providers/global-data/global-data";

/**
 * Generated class for the ModifyPhonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modify-phone',
  templateUrl: 'modify-phone.html',
})
export class ModifyPhonePage {
  phone: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private globalData: GlobalData, private storage: Storage) {
    this.storage.get('user').then(data=>{
      this.globalData.set_user(JSON.parse(data));
      console.log(this.globalData.get_user().mobileNumber);
      this.phone = this.globalData.get_user().mobileNumber;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifyPhonePage');
  }

  updatePhone(){
    console.log(123321);
  }
}
