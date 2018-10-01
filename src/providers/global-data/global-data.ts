import { Injectable } from '@angular/core';

@Injectable()
export class GlobalData {

  private _userId: string; // 用户id
  private _username: string; // 用户名
  private _user; // 用户详细信息
  private _token: string; // token
  // 设置http请求是否显示loading,注意:设置为true,接下来的请求会不显示loading,请求执行完成会自动设置为false
  private _showLoading = true;

  // 是否启用文件缓存
  private _enabledFileCache = true;

  get_userId(): string {
    return this._userId;
  }

  set_userId(value: string) {
    this._userId = value;
  }

  get_username(): string {
    return this._username;
  }

  set_username(value: string) {
    this._username = value;
  }

  get_user() {
    return this._user;
  }

  set_user(value: any) {
    this._user = value;
  }

  get_token(): string {
    return this._token;
  }

  set_token(value: string) {
    this._token = value;
  }

  get_showLoading(): boolean {
    return this._showLoading;
  }

  set_showLoading(value: boolean) {
    this._showLoading = value;
  }

  get enabledFileCache(): boolean {
    return this._enabledFileCache;
  }

  set enabledFileCache(value: boolean) {
    this._enabledFileCache = value;
  }

}

