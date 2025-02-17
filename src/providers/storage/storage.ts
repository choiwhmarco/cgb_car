import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor(public http: HttpClient) {
    console.log('Hello StorageProvider Provider');
  }
  public setItem(key,value){
    localStorage.setItem(key,JSON.stringify(value))
  }
  public getItem(key){
    return JSON.parse(localStorage.getItem(key))
  }
  public removeItem(key){
    localStorage.removeItem(key)
  }
}
