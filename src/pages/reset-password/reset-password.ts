import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordPage');
  }

  resetPwd(oldPwd:HTMLInputElement,newPwd:HTMLInputElement,newConfirmPwd:HTMLInputElement){
    if (oldPwd.value.length == 0){
      alert("请输入原密码");
    }
    else if(newPwd.value.length == 0){
      alert("请输入新的密码");
    }
    else if(newPwd.value != newConfirmPwd.value){
      alert("输入的新密码不一致");
    }
    else if(newPwd.value.length<8||newPwd.value.length>18){
      alert("密码长度必须为8-18位");
    }
    else if(oldPwd.value==newPwd.value){
      alert("输入的新密码与旧密码一致");
    }
  }
}
