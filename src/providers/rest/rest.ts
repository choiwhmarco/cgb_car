import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { HomePage } from "../../pages/home/home";
import { HttpHeaders } from "@angular/common/http";
import { RequestOptions } from "@angular/http";
import { Storage } from "@ionic/storage";
import { AlertController } from "ionic-angular";
import { Loading,LoadingController } from "ionic-angular";
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json;charset=UTF-8'})
};
const url = 'http://88.128.18.227:8080/cgb/v2/auth/';
@Injectable()
export class RestProvider {
  id: string = 'string';
  private loading: Loading;
  submitted: boolean = false;
  constructor(public http: HttpClient, public storage: Storage, private loadingCtrl: LoadingController,
              public alertCtrl:AlertController) {
    console.log('Hello RestProvider Provider');
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

  public login(user: string, hashPwd: string | Int32Array) {
    const param = {client_id: "string",
      username: user,
      password: hashPwd};
    this.http.post(url + 'login', param, httpOptions).subscribe((res:any) => {
      if(res.code == 1){
        this.submitted = true;
        this.storage.set('token', res.data.token);
        this.storage.set('user', res.data.user);
        return;
      }
      else if(res.code == 0){
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
  };
  /*
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  let content = JSON.stringify({
    client_id: this.id,
    username: user,
    password: hashPwd
  });
  console.log(content);
  this.http.post('http://88.128.18.227:8080/cgb/v2/auth/login', content, httpOptions)
    .subscribe(res => {
        console.log('ahusdasjdlkjasjldklj');
      },
      err => {
        console.log('Error');
      })*/
}


