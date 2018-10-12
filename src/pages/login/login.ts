import { Component } from '@angular/core';
import { IonicPage, AlertController, Events, ModalController, NavController, Platform, ViewController } from 'ionic-angular';
import { ForgetPasswordPage } from '../forget-password/forget-password';
import { FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { Md5 } from 'ts-md5';
import { MergeMapOperator } from "../../../node_modules/rxjs/operators/mergeMap";
import { GlobalData } from "../../providers/global-data/global-data";
import { APP_SERVE_URL } from "../../providers/constants/constants";
import { RestProvider } from "../../providers/rest/rest";
import { Loading, LoadingController } from "ionic-angular";
import { HttpClient, HttpHeaders } from "../../../node_modules/@angular/common/http";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json;charset=UTF-8'})
};
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  public isRemember:boolean = false;
  public isShow:boolean = false;
  submitted: boolean = false;
  id: string;
  loginCheck: boolean = false;
  private loading: Loading;
  public httpOptions: HttpHeaders;
  url: string = APP_SERVE_URL;
  constructor(public navCtrl: NavController, public storage: Storage,public http: HttpClient, public restProvider: RestProvider,
              public alertCtrl: AlertController, private loadingCtrl: LoadingController, private globalData: GlobalData) {


  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



  showLoading(content = ''): void {
    if (this.loading) {// 如果loading已经存在则不再打开
      return;
    }
    const loading = this.loadingCtrl.create({
      content
    });
    loading.present();
    this.loading = loading;
  }

  /**
   * 关闭loading
   */
  hideLoading(): void {
    this.loading && this.loading.dismiss();
    this.loading = null;
  }

  public rememberPassword(username:HTMLInputElement,password:HTMLInputElement) {
    this.isRemember=true;
    window.localStorage.setItem('isRemember',JSON.stringify(true));
    let pwd = password.toString();
    let hashPwd = Md5.hashStr(pwd);
    this.navCtrl.setRoot(HomePage);
  }

  goForgetPwd(){
    this.navCtrl.push(ForgetPasswordPage);
  }


  logInFail(message: String){
    let alert = this.alertCtrl.create({
      message: message.toString(),
      buttons: [
        {
          text: '关闭',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }


  logIn(username: HTMLInputElement, password: HTMLInputElement) {
    if (username.value.length == 0) {
      this.logInFail('请输入用户名');
      return;
    } else if (password.value.length == 0) {
      this.logInFail('请输入密码');
      return;
    }
    this.submitted = true;
    let pwd = password.value.toString();
    let hashPwd = Md5.hashStr(pwd);
    let name = username.value.toString();
    const param = {client_id: "string",
      username: name,
      password: hashPwd};
    this.showLoading();
    this.http.post(this.url + 'v2/auth/login', param, httpOptions).subscribe((res:any) => {
      this.hideLoading();
      if (res.code == 1) {
        this.submitted = true;
        this.globalData.set_user(res.data.user);
        this.globalData.set_userId(res.data.user.id);
        this.globalData.set_username(res.data.user.name);
        this.globalData.set_token(res.data.token);
        this.storage.remove('token');
        this.storage.remove('user');
        this.storage.set('token', res.data.token);
        this.storage.set('user',JSON.stringify(res.data.user));
        if (this.isRemember == true) {
          let data = {isRemember: this.isRemember};
          this.storage.remove("USER_INFO");
          this.storage.remove('loginname');
          this.storage.remove('loginpwd');
          this.storage.set("USER_INFO", JSON.stringify(data));
          this.storage.set('loginname', name);
          this.storage.set('loginpwd',pwd);
          this.navCtrl.setRoot(HomePage);
          return;
        }
        this.navCtrl.push(HomePage);
        return;
      }
      else if (res.code == 0) {
        let alert = this.alertCtrl.create({
          message: '账号或密码错误',
          buttons: [
            {
              text: '关闭',
              handler: () => {
                console.log('Cancel clicked');
              }
            }
          ]
        });
        alert.present();
      }
    });
  }
    /*
    this.commonService.getToken(APP_SERVE_URL + 'login', content).mergeMap( token=>{
      this.globalData.token = token;
    this.storage.set('token', token);
    return this.commonService.getUserInfo();}).subscribe((userInfo: UserInfo) => {
      this.submitted = false;
      this.helper.loginSuccessHandle(userInfo);
      if (this.viewCtrl.isOverlay) {
        this.viewCtrl.dismiss();
      } else {
        this.navCtrl.setRoot(HomePagePage); // 重新设置首页
      }
    }, () => {
      this.submitted = false;
    });*/




}

