import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConstantsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export const APP_SERVE_URL = 'http://88.128.18.227:8080/cgb/v2/auth/';
export const REQUEST_TIMEOUT = 20000; // 请求超时时间,单位为毫秒
export const IS_DEBUG = true; // 是否开发(调试)模式
@Injectable()
export class ConstantsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ConstantsProvider Provider');
  }

}
