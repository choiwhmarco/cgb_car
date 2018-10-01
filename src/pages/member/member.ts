import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChooseDeptPage } from "../choose-dept/choose-dept";
import { ResetPasswordPage } from "../reset-password/reset-password";
import { ModifyPhonePage } from "../modify-phone/modify-phone";
import { AboutPage } from "../about/about";
import { LoginPage } from "../login/login";
import { Storage } from "@ionic/storage";
import { GlobalData } from "../../providers/global-data/global-data";

/**
 * Generated class for the MemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-member',
  templateUrl: 'member.html',
})
export class MemberPage {
  name: string;
  dept: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private globalData: GlobalData) {
    this.storage.get('user').then(data=>{
      this.globalData.set_user(JSON.parse(data));
      this.name = this.globalData.get_user().name;
      this.dept = this.globalData.get_user().deptName;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberPage');
  }

  goModifyDepartment(){
    this.navCtrl.push(ChooseDeptPage);
  }

  goResetPassword(){
    this.navCtrl.push(ResetPasswordPage);
  }

  goModifyPhone(){
    this.navCtrl.push(ModifyPhonePage);
  }

  goAboutUs(){
    this.navCtrl.push(AboutPage);
  }
  logout() {
    this.storage.remove('USER_INFO');
    this.storage.remove('user');
    this.storage.remove('token');
    this.navCtrl.setRoot(LoginPage);
  }
}
