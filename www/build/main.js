webpackJsonp([40],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMaintainOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choose_car_choose_car__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__choose_maintain_shop_choose_maintain_shop__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddMaintainOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddMaintainOrderPage = /** @class */ (function () {
    function AddMaintainOrderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.choosedCheck = "repair";
    }
    AddMaintainOrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddMaintainOrderPage');
    };
    AddMaintainOrderPage.prototype.goChooseCar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__choose_car_choose_car__["a" /* ChooseCarPage */]);
    };
    AddMaintainOrderPage.prototype.goChooseMaintainShop = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__choose_maintain_shop_choose_maintain_shop__["a" /* ChooseMaintainShopPage */]);
    };
    AddMaintainOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-maintain-order',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\add-maintain-order\add-maintain-order.html"*/'<!--\n  Generated template for the AddMaintainOrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar align-title="center" color="primary">\n    <ion-title>申请维保</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding has-subheader="false" class="content" style="background: RGBA(244, 244, 244, 1)" >\n  <ion-list class="list">\n    <ion-item class="item">\n      <ion-label>\n        用车部门\n      </ion-label>\n      <ion-label text-end class="item-note" style="color: #000;">dept</ion-label>\n    </ion-item>\n    <ion-item class="item">\n      <ion-label>\n        申&ensp;请&ensp;人\n      </ion-label>\n      <ion-label text-end class="item-note" style="color: #000;">name</ion-label>\n    </ion-item>\n    <ion-item (click)="goChooseCar()">\n      <ion-label class="item" color="dark">选择车辆:</ion-label>\n      <ion-label text-end text-wrap class="item-note" style="color: #666;" *ngIf="!this.dataFromOtherPage">\n        请选择维保的车辆\n      </ion-label>\n      <ion-label class="item-note" style="color: #666;" *ngIf="this.dataFromOtherPage">\n        已选择：\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class="item" color="dark">车牌号:</ion-label>\n      <ion-label text-end="">123</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label color="dark">车辆类型:</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class="item" color="dark">维保类型:</ion-label>\n      <ion-select [(ngModel)]="choosedCheck" interface="popover">\n        <ion-option value="repair">维修</ion-option>\n        <ion-option value="maintainence">保养</ion-option>\n        <ion-option value="check">年审</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item (click)="goChooseMaintainShop()">\n      <ion-label class="item" color="dark">选择维保单位:</ion-label>\n      <ion-label text-end text-wrap class="item-note" style="color: #666;" *ngIf="!this.dataFromOtherPage">\n        请选择维保单位\n      </ion-label>\n      <ion-label class="item-note" style="color: #666;" *ngIf="this.dataFromOtherPage">\n        已选择：\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>单位名称:</ion-label>\n    </ion-item>\n    <ion-item class="item-input">\n      <ion-label text-wrap color="dark">行驶里程:</ion-label>\n      <ion-input type="number" text-end placeholder="请输入行驶里程"></ion-input>\n    </ion-item>\n    <ion-item class="item-input">\n      <ion-label text-wrap color="dark">维保内容:</ion-label>\n      <ion-input type="text" text-end placeholder="请输入维保内容"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <button class="button button-block button-positive" full (click)="sendApply()">\n    提交申请\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\add-maintain-order\add-maintain-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AddMaintainOrderPage);
    return AddMaintainOrderPage;
}());

//# sourceMappingURL=add-maintain-order.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseMaintainShopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChooseMaintainShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChooseMaintainShopPage = /** @class */ (function () {
    function ChooseMaintainShopPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.name = "name";
    }
    ChooseMaintainShopPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChooseMaintainShopPage');
    };
    ChooseMaintainShopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-choose-maintain-shop',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\choose-maintain-shop\choose-maintain-shop.html"*/'<!--\n  Generated template for the ChooseMaintainShopPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar align-title="center" color="primary">\n    <ion-title>选择维保单位</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-searchbar placeholder="搜索维保单位名称" cancelButtonText="取消" [showCancelButton]="true" (ionFocus)="selectAll($event)" class="search_list">\n\n    </ion-searchbar>\n    <table class="driver_table">\n      <tr class="table_tr">\n        <th class="table_th">单位名称</th>\n      </tr>\n      <tr class="table_tr" ng-repeat="item in views.taskPage[0].rows | filter:{cardNumber:views.searchName}"\n          ng-click=\'chooseCar(item)\'>\n        <td class="table_th">{{this.name}}</td>\n      </tr>\n\n    </table>\n  </ion-list>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\choose-maintain-shop\choose-maintain-shop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ChooseMaintainShopPage);
    return ChooseMaintainShopPage;
}());

//# sourceMappingURL=choose-maintain-shop.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choose_destination_choose_destination__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__choose_origin_choose_origin__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__choose_order_comment_choose_order_comment__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AddRegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddRegistrationPage = /** @class */ (function () {
    function AddRegistrationPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gaming = "n64";
        this.myDate = null;
        this.data = false;
        this.anArray = [];
        this.index = 1;
        this.one = 1;
        this.destinationIndex = 0;
        this.dataFromOtherPage = null;
        this.oAddress = null;
        this.dAddress = [];
        this.flag = true;
        this.destAdd = function (destData) {
            _this.anArray[_this.destinationIndex] = destData;
        };
        this.originAdd = function (originData) {
            _this.oAddress = originData;
        };
        this.callback = function (data) {
            _this.dataFromOtherPage = data;
            alert(_this.dataFromOtherPage);
            console.log('data received from other page', _this.dataFromOtherPage);
        };
        this.myDate = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toISOString();
        if (this.flag == true) {
            this.anArray.push({ 'value': '' });
            this.oAddress = "请输入地点";
        }
        this.anArray[this.anArray.length - 1] = "请输入地点";
    }
    AddRegistrationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddRegistrationPage');
    };
    AddRegistrationPage.prototype.goTo = function () {
        this.data = true;
    };
    AddRegistrationPage.prototype.destination = function (index) {
        this.destinationIndex = index;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__choose_destination_choose_destination__["a" /* ChooseDestinationPage */], { dest: this.destAdd });
    };
    AddRegistrationPage.prototype.removeDestination = function (index) {
        this.anArray.splice(index, 1);
        this.destinationIndex--;
    };
    AddRegistrationPage.prototype.addDestination = function () {
        this.anArray.push({ 'value': '' });
        this.destinationIndex++;
        this.anArray[this.destinationIndex] = "请输入地点";
    };
    AddRegistrationPage.prototype.origin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__choose_origin_choose_origin__["a" /* ChooseOriginPage */], { item: this.originAdd });
    };
    AddRegistrationPage.prototype.goChooseOrderComment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__choose_order_comment_choose_order_comment__["a" /* ChooseOrderCommentPage */], { firstPassed: "registration", callback: this.callback });
    };
    AddRegistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-add-registration',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\add-registration\add-registration.html"*/'<!--\n  Generated template for the AddRegistrationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar align-title="center" color="primary">\n    <ion-title>出车登记</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding has-subheader="false" class="content" style="background: RGBA(244, 244, 244, 1)">\n  <ion-list>\n    <ion-item>\n      <ion-label class="item" color="dark">选择车辆</ion-label>\n      <ion-select [(ngModel)]="gaming" interface="popover">\n        <ion-option value="nes">NES</ion-option>\n        <ion-option value="n64">Nintendo64</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label class="input_label" color="dark">出车里程数</ion-label>\n      <ion-input type="text" text-end placeholder="公里"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="dark">出车时间</ion-label>\n      <ion-datetime displayFormat="MM/DD, YYYY HH:mm" cancelText=取消 doneText=确定 [(ngModel)]="myDate"></ion-datetime>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-item (click)="goChooseOrderComment()">\n      <ion-label class="item" color="dark">用车事由</ion-label>\n      <ion-label text-end class="item-note" style="color: #666;" *ngIf="!this.dataFromOtherPage">\n        快速选择\n      </ion-label>\n      <ion-label class="item-note" text-end style="color: #666;" *ngIf="this.dataFromOtherPage">\n        已填写\n      </ion-label>\n\n    </ion-item>\n    <ion-item>\n      <ion-textarea type="text" text-left clearInput="true" [(ngModel)]="this.dataFromOtherPage" placeholder="请选择用车事由" rows="5">\n      </ion-textarea>\n    </ion-item>\n\n    <ion-item>\n      <ion-textarea type="text" clearInput="true" placeholder="请输入工作任务简述" rows="5">\n\n      </ion-textarea>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-item inset>\n      <ion-label class="input_label" color="dark">始发地</ion-label>\n      <ion-textarea type="text" text-right class="address-input" text-end placeholder="请输入地点" [readonly]="true" [(ngModel)]="this.oAddress" (click)="origin()" rows="3">\n      </ion-textarea>\n    </ion-item>\n\n\n\n\n    <ion-item class="input_label" inset *ngFor="let att of anArray; let idx = index">\n      <button ion-button class="removeAddressImg" (click)="removeDestination(idx)"></button>\n      <ion-label color="dark" (click)="destination(idx)">目的地{{idx+1}}</ion-label>\n      <ion-textarea type="text"  text-right class="address-input" placeholder="请输入地点" [(ngModel)]="anArray[idx]" (click)="destination(idx)" rows="3">\n      </ion-textarea>\n      <button ion-button class="removeAddressImg" item-right (click)="removeDestination(idx)"></button>\n    </ion-item>\n    <button ion-button class="addAddressImg" (click)="addDestination()"></button>\n  </ion-list>\n\n  <button class="button button-block button-positive" full (click)="save()">\n    出车\n  </button>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\add-registration\add-registration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AddRegistrationPage);
    return AddRegistrationPage;
}());

//# sourceMappingURL=add-registration.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplyCarPeccancyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choose_car_choose_car__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__choose_driver_choose_driver__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ApplyCarPeccancyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApplyCarPeccancyPage = /** @class */ (function () {
    function ApplyCarPeccancyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myDate = null;
        this.name = "name";
        this.plateNumber = "123";
        this.carType = "12321";
        this.myDate = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toISOString();
    }
    ApplyCarPeccancyPage.prototype.goChooseCar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__choose_car_choose_car__["a" /* ChooseCarPage */]);
    };
    ApplyCarPeccancyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ApplyCarPeccancyPage');
    };
    ApplyCarPeccancyPage.prototype.goChooseDriver = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__choose_driver_choose_driver__["a" /* ChooseDriverPage */]);
    };
    ApplyCarPeccancyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-apply-car-peccancy',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\apply-car-peccancy\apply-car-peccancy.html"*/'<!--\n  Generated template for the ApplyCarPeccancyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar align-title="center" color="primary">\n    <ion-title>申请违章</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list text-wrap>\n    <ion-item>\n      <ion-label>\n        申&ensp;请&ensp;人\n      </ion-label>\n      <ion-label text-end class="item-note" style="color: #000;">name</ion-label>\n    </ion-item>\n    <ion-item (click)="goChooseCar()">\n      <ion-label class="item" color="dark">选择车辆:</ion-label>\n      <ion-label class="item-note" text-end style="color: #666;" *ngIf="!this.dataFromOtherPage">\n        请选择违章车辆\n      </ion-label>\n      <ion-label class="item-note" style="color: #666;" *ngIf="this.dataFromOtherPage">\n        已选择：\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class="item" color="dark">车牌号:</ion-label>\n      <ion-label text-end>{{this.plateNumber}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label color="dark">车辆类型:</ion-label>\n      <ion-label text-end>{{this.carType}}</ion-label>\n    </ion-item>\n    <ion-item class="item-input">\n      <ion-label text-wrap color="dark">违章地区:</ion-label>\n      <ion-input type="text" text-end placeholder="请输入违章地区"></ion-input>\n    </ion-item>\n    <ion-item class="item-input">\n      <ion-label text-wrap color="dark">违章地点:</ion-label>\n      <ion-input type="text" text-end placeholder="请输入违章详细地点"></ion-input>\n    </ion-item>\n    <ion-item class="item-input">\n      <ion-label text-wrap color="dark">文书编号:</ion-label>\n      <ion-input type="text" text-end placeholder="请输入违章文书编号"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="dark" class="item">违章时间:</ion-label>\n      <ion-datetime displayFormat="MM/DD, YYYY HH:mm" placeholder="请选择" cancelText=取消 doneText=确定 [(ngModel)]="myDate"></ion-datetime>\n    </ion-item>\n    <ion-item class="item-input">\n      <ion-label text-wrap color="dark">违章代码:</ion-label>\n      <ion-input type="text" text-end placeholder="请输入违章代码"></ion-input>\n    </ion-item>\n    <ion-item class="item-input">\n      <ion-label text-wrap color="dark">违章行为:</ion-label>\n      <ion-input type="text" text-end placeholder="请输入违章行为"></ion-input>\n    </ion-item>\n    <ion-item class="item-input">\n      <ion-label text-wrap color="dark">违章责任人:</ion-label>\n      <ion-input type="text" text-end placeholder="请输入违章责任人"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-item (click)="goChooseDriver()">\n      <ion-label class="item" color="dark">违章处理人:</ion-label>\n      <ion-label text-end class="item-note" style="color: #666;" *ngIf="!this.dataFromOtherPage">\n        请指派司机\n      </ion-label>\n      <ion-label class="item-note" style="color: #666;" *ngIf="this.dataFromOtherPage">\n        已填写\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <button class="button button-block button-positive" full (click)="sendApply()">\n    提交申请\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\apply-car-peccancy\apply-car-peccancy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ApplyCarPeccancyPage);
    return ApplyCarPeccancyPage;
}());

//# sourceMappingURL=apply-car-peccancy.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplyCarConsumeLogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choose_car_choose_car__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ApplyCarConsumeLogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApplyCarConsumeLogPage = /** @class */ (function () {
    function ApplyCarConsumeLogPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.myDate = null;
        this.choosedType = "wash";
        this.wash = "wash";
        this.gas = "gas";
        this.choosedIsDriving = "no";
        this.yes = "yes";
        this.no = "no";
        this.myDate = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toISOString();
    }
    ApplyCarConsumeLogPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ApplyCarConsumeLogPage');
    };
    ApplyCarConsumeLogPage.prototype.goChooseCar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__choose_car_choose_car__["a" /* ChooseCarPage */]);
    };
    ApplyCarConsumeLogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-apply-car-consume-log',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\apply-car-consume-log\apply-car-consume-log.html"*/'<!--\n  Generated template for the ApplyCarConsumeLogPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar align-title="center" color="primary">\n    <ion-title>申请洗车、加油记录</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding fullscreen class="content">\n  <ion-list text-wrap>\n    <ion-item class="item">\n      <ion-label>\n        申&ensp;请&ensp;人\n      </ion-label>\n      <ion-label text-end class="item-note" style="color: #000;">name</ion-label>\n    </ion-item>\n    <ion-item (click)="goChooseCar()">\n      <ion-label class="item" color="dark">选择车辆:</ion-label>\n      <ion-label class="item-note" text-center style="color: #666;" *ngIf="!this.dataFromOtherPage">\n        请选择本次消费的车辆\n      </ion-label>\n      <ion-label class="item-note" style="color: #666;" *ngIf="this.dataFromOtherPage">\n        已选择：\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class="item" color="dark">车牌号:</ion-label>\n      <ion-label text-end="">123</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label color="dark">车辆类型:</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label color="dark" class="item">业务时间:</ion-label>\n      <ion-datetime displayFormat="MM/DD, YYYY HH:mm" placeholder="请选择" cancelText=取消 doneText=确定 [(ngModel)]="myDate"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label class="item" color="dark">业务类型:</ion-label>\n      <ion-select [(ngModel)]="choosedType" interface="popover">\n        <ion-option value="wash">洗车</ion-option>\n        <ion-option value="gas">加油</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label class="item" color="dark">是否出车过程中:</ion-label>\n      <ion-select [(ngModel)]="choosedIsDriving" interface="popover">\n        <ion-option value="no">否</ion-option>\n        <ion-option value="yes">是</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item class="item-input" *ngIf="choosedIsDriving==no">\n      <ion-label text-wrap color="dark">出场里程:</ion-label>\n      <ion-input type="text" text-end placeholder="请输入出场里程"></ion-input>\n    </ion-item>\n    <ion-item class="item-input" *ngIf="choosedIsDriving==no">\n      <ion-label text-wrap color="dark">回场里程:</ion-label>\n      <ion-input type="text" text-end placeholder="请输入回场里程"></ion-input>\n    </ion-item>\n    <ion-item class="item-input">\n      <ion-label text-wrap color="dark">费用:</ion-label>\n      <ion-input type="text" text-end placeholder="请输入费用"></ion-input>\n    </ion-item>\n  </ion-list>\n  <button class="button button-block button-positive" full (click)="sendApply()">\n    提交申请\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\apply-car-consume-log\apply-car-consume-log.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ApplyCarConsumeLogPage);
    return ApplyCarConsumeLogPage;
}());

//# sourceMappingURL=apply-car-consume-log.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comment_comment__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applydo_applydo__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ApplyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApplyPage = /** @class */ (function () {
    function ApplyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tabsIndex = 0;
        this.myDate1 = null;
        this.myDate2 = null;
        this.myDate1 = new Date().toISOString();
        this.myDate2 = new Date().toISOString();
    }
    ApplyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ApplyPage');
    };
    ApplyPage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    ApplyPage.prototype.switchTabs = function (index) {
        this.tabsIndex = index;
    };
    ApplyPage.prototype.carApply = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__applydo_applydo__["a" /* ApplydoPage */]);
    };
    ApplyPage.prototype.goComment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__comment_comment__["a" /* CommentPage */]);
    };
    ApplyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-apply',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\apply\apply.html"*/'<!--\n  Generated template for the ApplyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="content_head">\n\n  <ion-row class="head_nav_bar">\n    <ion-segment-button class="nav_back_button" (click)="goback()" item-start="">\n      <ion-icon name="arrow-back"></ion-icon>返回</ion-segment-button>\n    <ion-label align-items-center="" class="header">用车申请</ion-label>\n  </ion-row>\n\n  <div class="col-33 col-offset-33 approvericon_wrap">\n    <img class="approvericon" src="assets/imgs/memberphoto.png" width="70px"/>\n  </div>\n  <ion-list  class="header_name">\n    <ion-label class="pname">Name</ion-label>\n    <ion-label class="dept">DEPT</ion-label>\n  </ion-list>\n  <ion-row class="head_times">\n    <ion-label class="w50">申请次数:次</ion-label>\n    <ion-label class="w50">用车里程:公里</ion-label>\n  </ion-row>\n\n</ion-header>\n\n\n<ion-content padding has-subheader="false" class="content" delegate-handle="location" overflow-scroll="true">\n  <ion-row class="row add_tab">\n    <ion-col class="col"\n             (click)="switchTabs(0)"\n             ng-style="{color:views.tabIndex == 0?\'\':\'#bebebe\'}"\n             *ngIf="this.tabsIndex!=0">\n      <ion-icon class="col_i" name="car"></ion-icon>\n      <ion-label class="col_p">当前用车</ion-label>\n    </ion-col>\n    <ion-col class="col active"\n             (click)="switchTabs(0)"\n             ng-style="{color:views.tabIndex == 0?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex==0">\n      <ion-icon class="col_i" name="car"></ion-icon>\n      <ion-label class="col_p">当前用车</ion-label>\n    </ion-col>\n    <ion-col class="col"\n             (click)="switchTabs(1)"\n             ng-style="{color:views.tabIndex == 1?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex!=1">\n      <ion-icon class="col_i" name="list-box"></ion-icon>\n      <ion-label class="col_p">用车记录</ion-label>\n    </ion-col>\n    <ion-col class="col active"\n             (click)="switchTabs(1)"\n             ng-style="{color:views.tabIndex == 1?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex==1">\n      <ion-icon class="col_i" name="list-box"></ion-icon>\n      <ion-label class="col_p">用车记录</ion-label>\n    </ion-col>\n    <ion-col class="col active"\n             (click)="switchTabs(2)"\n             ng-style="{color:views.tabIndex == 1?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex==2">\n      <ion-icon class="col_i" name="star-half"></ion-icon>\n      <ion-label class="col_p">服务评价</ion-label>\n    </ion-col>\n    <ion-col class="col"\n             (click)="switchTabs(2)"\n             ng-style="{color:views.tabIndex == 1?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex!=2">\n      <ion-icon class="col_i" name="star-half"></ion-icon>\n      <ion-label class="col_p">服务评价</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-item class="padding-horizontal btn_div" *ngIf="tabsIndex==0">\n    <button class="button button-block button-positive" (click)="carApply()">\n      申请用车\n    </button>\n  </ion-item>\n  <ion-list>\n  <ion-item *ngIf="tabsIndex == 1">\n    <ion-datetime min="2017" style="width: 100%; text-align: center;" displayFormat="YYYY-MM" cancelText=取消 doneText=确定 [(ngModel)]="myDate1"></ion-datetime>\n  </ion-item>\n  <ion-item *ngIf="tabsIndex == 2">\n    <ion-datetime min="2017" style="width: 100%; text-align: center;" displayFormat="YYYY-MM" cancelText=取消 doneText=确定 [(ngModel)]="myDate2"></ion-datetime>\n  </ion-item>\n  </ion-list>\n  <div class="con" *ngIf="tabsIndex==2">\n    <div class="use_div">\n      <ul class="use_ul" (click)="goComment()">\n        <li class="use_ul_li">\n          <p class="use_ul_p">单号：</p>\n          <span class="use_ul_span">123321</span>\n        </li>\n        <li class="use_ul_li">\n          <p class="use_ul_p">车牌号码：</p>\n          <span class="use_ul_span">2018/11/30</span>\n        </li>\n        <li class="use_ul_li">\n          <p class="use_ul_p">驾驶人：</p>\n          <span class="use_ul_span">2018/1/30</span>\n        </li>\n        <li class="use_ul_li">\n          <p class="use_ul_p">出发时间：</p>\n          <span class="use_ul_span">321</span>\n        </li>\n        <li class="use_ul_li">\n          <p class="use_ul_p">目的地：</p>\n          <span class="use_ul_span">456</span>\n        </li>\n\n      </ul>\n    </div>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\apply\apply.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ApplyPage);
    return ApplyPage;
}());

//# sourceMappingURL=apply.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CommentPage = /** @class */ (function () {
    function CommentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rate = 0;
    }
    CommentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CommentPage');
    };
    CommentPage.prototype.commentApply = function () {
        if (this.rate == 0) {
            alert('至少需要评一星');
        }
    };
    CommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-comment',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\comment\comment.html"*/'<!--\n  Generated template for the CommentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>用车评价</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n      <ion-label>用车评价</ion-label>\n      <rating [(ngModel)]="rate"\n              readOnly="false"\n      max="5"\n      emptyStarIconName="star-outline"\n      halfStarIconName="star-half"\n      starIconName="star"\n      nullable="false">\n      </rating>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-label class="item" color="dark">评语:</ion-label>\n      <ion-select [(ngModel)]="choosedComment" interface="popover">\n        <ion-option value="comfort">环境舒适</ion-option>\n        <ion-option value="safe">司机驾驶平稳</ion-option>\n        <ion-option value="nice">态度超好</ion-option>\n        <ion-option value="confirmed">认路准确</ion-option>\n        <ion-option value="kind">服务很到位</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item class="item item-input">\n      <ion-textarea type="text" text-left clearInput="true" placeholder="在这输入你的评论..." rows="5">\n      </ion-textarea>\n    </ion-item>\n  </ion-list>\n  <button class="button button-block button-positive" full (click)="commentApply()">\n    提交用车评价\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\comment\comment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CommentPage);
    return CommentPage;
}());

//# sourceMappingURL=comment.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplydoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choose_order_comment_choose_order_comment__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__choose_destination_choose_destination__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__choose_origin_choose_origin__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular___ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__choose_driver_choose_driver__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ApplydoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApplydoPage = /** @class */ (function () {
    function ApplydoPage(navCtrl, navParams, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.myDate = null;
        this.destinationIndex = 1;
        this.anArray = [];
        this.dataFromOtherPage = null;
        this.useType = "public";
        this.useTime = "threehour";
        this.choosedDriver = "self";
        this.pick = "pickDriver";
        this.startIndex = 1;
        this.flag = 0;
        this.zero = 0;
        this.one = 1;
        this.flagDriver = 0;
        this.flagB = true;
        this.destAddress = function (destData) {
            _this.anArray[_this.destinationIndex] = destData;
        };
        this.originAddress = function (originData) {
            _this.oAddress = originData;
        };
        this.callback = function (data) {
            _this.dataFromOtherPage = data;
            console.log('data received from other page', _this.dataFromOtherPage);
        };
        this.myDate = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toISOString();
        if (this.flagB == true) {
            this.anArray.push({ 'value': '' });
            this.oAddress = "请输入地点";
        }
        this.anArray[this.anArray.length - 1] = "请输入地点";
    }
    ApplydoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ApplydoPage');
    };
    ApplydoPage.prototype.destination = function (index) {
        this.destinationIndex = index;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__choose_destination_choose_destination__["a" /* ChooseDestinationPage */], { dest: this.destAddress });
    };
    ApplydoPage.prototype.removeDestination = function (index) {
        this.anArray.splice(index, 1);
        this.destinationIndex--;
    };
    ApplydoPage.prototype.addDestination = function () {
        this.anArray.push({ 'value': '' });
        this.destinationIndex++;
        this.anArray[this.destinationIndex] = "请输入地点";
    };
    ApplydoPage.prototype.origin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__choose_origin_choose_origin__["a" /* ChooseOriginPage */], { item: this.originAddress });
    };
    ApplydoPage.prototype.goChooseOrderComment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__choose_order_comment_choose_order_comment__["a" /* ChooseOrderCommentPage */], { callback: this.callback });
    };
    ApplydoPage.prototype.doPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            inputs: [
                {
                    name: 'input',
                    placeholder: '请输入用车天数，单位（天）'
                },
            ],
            buttons: [
                {
                    text: '取消',
                    handler: function (data) {
                        console.log('取消');
                    }
                },
                {
                    text: '确定',
                    handler: function (data) {
                        if (data.input > 31 || data.input < 1) {
                            alert('请输入有效时间');
                            return;
                        }
                        else {
                            _this.data = data.input;
                            _this.flag = 1;
                            _this.useTime = "customday";
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    ApplydoPage.prototype.onChange = function ($event) {
        if (this.choosedDriver == this.pick) {
            this.chooseDriver();
        }
    };
    ApplydoPage.prototype.chooseDriver = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__choose_driver_choose_driver__["a" /* ChooseDriverPage */]);
    };
    ApplydoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-applydo',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\applydo\applydo.html"*/'<!--\n  Generated template for the ApplydoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar align-title="center" color="primary">\n    <ion-title>申请用车</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding has-subheader="false" class="content" style="background: RGBA(244, 244, 244, 1)">\n  <ion-list class="list">\n    <ion-item class="item">\n      <ion-label>\n        用车部门\n      </ion-label>\n      <ion-label text-end class="item-note" style="color: #000;">dept</ion-label>\n    </ion-item>\n    <ion-item class="item">\n      <ion-label>\n        申&ensp;请&ensp;人\n      </ion-label>\n      <ion-label text-end class="item-note" style="color: #000;">name</ion-label>\n    </ion-item>\n    <ion-item class="item-input">\n      <ion-label text-left class="input-label" color="dark">电话:</ion-label>\n      <ion-input type="text" text-end placeholder="联系电话"></ion-input>\n    </ion-item>\n    <ion-item class="item">\n      <ion-label class="item" color="dark">审&ensp;批&ensp;员</ion-label>\n      <ion-select [(ngModel)]="gaming" interface="popover">\n        <ion-option value="nes">NES</ion-option>\n        <ion-option value="n64">Nintendo64</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item class="item-input">\n      <ion-label text-left class="input-label" color="dark">人数:</ion-label>\n      <ion-input type="number" text-end placeholder="请输入出行人数"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label class="item" color="dark">用车性质</ion-label>\n      <ion-select [(ngModel)]="useType" interface="popover">\n        <ion-option value="public">公务用车</ion-option>\n        <ion-option value="production">生产用车</ion-option>\n        <ion-option value="special">特种用车</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label color="dark" class="item">用车时间:</ion-label>\n      <ion-datetime displayFormat="MM/DD, YYYY HH:mm" min="2017" minuteValues="00,05,10,15,20,25,30,35,40,45,50,55" cancelText=取消 doneText=确定 [(ngModel)]="myDate"></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label class="item" color="dark">用车时长:</ion-label>\n      <ion-select [(ngModel)]="useTime" interface="popover">\n        <ion-option value="threehour">3小时</ion-option>\n        <ion-option value="sixhour">6小时</ion-option>\n        <ion-option value="oneday">1天</ion-option>\n        <ion-option *ngIf="flag==one" value="customday"><ion-label>{{this.data}}</ion-label>天</ion-option>\n        <ion-option value="custom" (ionSelect)="doPrompt()">自定义</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item class="comment_detail">\n      <div class="choose_span">\n        <span class="chooseDriver">申请车型&nbsp;&nbsp;&nbsp;</span>\n        <span class="chooseSpan"\n              ng-repeat="item in views.simpleCarTypeArr track by $index"\n              ng-class="{cur:$index==views.simpleCarTypeSelectedIndex}"\n              ng-click="toggleCarTypeSpan($index)">car</span>\n      </div>\n      <div class="choosed" id="choosedCarType">\n        已选择：\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class="item" color="dark">选择司机</ion-label>\n      <ion-select [(ngModel)]="choosedDriver" interface="popover" (ionChange)="onChange($event)">\n        <ion-option value="self">自驾</ion-option>\n        <ion-option value="system">系统分配</ion-option>\n        <ion-option value="pickDriver" *ngIf="flagDriver==zero">选择司机</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item (click)="goChooseOrderComment()">\n      <ion-label class="item" color="dark">用车事由</ion-label>\n      <ion-label text-end class="item-note" style="color: #666;" *ngIf="!this.dataFromOtherPage">\n        快速选择\n      </ion-label>\n      <ion-label class="item-note" style="color: #666;" *ngIf="this.dataFromOtherPage">\n        已填写\n      </ion-label>\n    </ion-item>\n    <ion-item class="item item-input">\n      <ion-textarea type="text" text-left clearInput="true" [(ngModel)]="this.dataFromOtherPage" placeholder="请选择用车事由" rows="3">\n      </ion-textarea>\n    </ion-item>\n    <ion-item class="item">\n      工作任务简述\n    </ion-item>\n    <ion-item class="item item-input">\n      <ion-textarea type="text" text-left clearInput="true" placeholder="请输入工作任务简述" rows="3">\n      </ion-textarea>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-label class="input_label" color="dark">始发地</ion-label>\n      <ion-textarea type="text" text-right class="address-input" text-end placeholder="请输入地点" [readonly]="true" [(ngModel)]="this.oAddress" (click)="origin()" rows="3">\n      </ion-textarea>\n    </ion-item>\n\n\n\n\n    <ion-item class="input_label" *ngFor="let att of anArray; let idx = index">\n      <ion-label color="dark" (click)="destination(idx)">目的地{{idx+1}}</ion-label>\n      <ion-textarea type="text" class="address-input" placeholder="请输入地点" [(ngModel)]="anArray[idx]" (click)="destination(idx)" rows="3">\n      </ion-textarea>\n      <button ion-button class="removeAddressImg" item-right (click)="removeDestination(idx)"></button>\n    </ion-item>\n    <button ion-button class="addAddressImg" (click)="addDestination()"></button>\n  </ion-list>\n\n  <button class="button button-block button-positive" full (click)="sendApply()">\n    提交申请\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\applydo\applydo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular___["a" /* AlertController */]])
    ], ApplydoPage);
    return ApplydoPage;
}());

//# sourceMappingURL=applydo.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApprovalOrderInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ApprovalOrderInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApprovalOrderInfoPage = /** @class */ (function () {
    function ApprovalOrderInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.deptName = "ddd";
        this.applicantName = "mmim";
        this.passengerCount = 3;
        this.orderComment = "333";
        this.workDescrip = "Hjj";
        this.null = null;
        this.startTime = "2008/12/30";
        this.finishTime = "2009/12/30";
        this.originAddress = "333";
        this.anArray = [];
        this.index = 3;
        this.loop();
    }
    ApprovalOrderInfoPage.prototype.loop = function () {
        for (var i = 0; i < this.index; i++) {
            this.anArray[i] = "a1";
        }
    };
    ApprovalOrderInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ApprovalOrderInfoPage');
    };
    ApprovalOrderInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-approval-order-info',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\approval-order-info\approval-order-info.html"*/'<!--\n  Generated template for the ApprovalOrderInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar align-items-center color="primary">\n    <ion-title>订单信息</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="content">\n  <ion-list>\n    <ion-item class="item-divider">\n      <ion-label color="primary">订单信息：</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        用车部门\n      </ion-label>\n      <ion-label text-end class="item" style="color: #000;">{{this.deptName}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        申&ensp;请&ensp;人\n      </ion-label>\n      <ion-label text-end class="item" style="color: #000;">{{this.applicantName}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label text-left class="input-label" color="dark">用车事由</ion-label>\n      <ion-label text-end class="item" style="color: #000;">{{this.orderComment}}</ion-label>\n    </ion-item>\n    <ion-item *ngIf="workDescrip != null">\n      <ion-label text-left class="input-label" color="dark">工作任务简述</ion-label>\n      <ion-label text-end class="item" style="color: #000;">{{this.workDescrip}}</ion-label>\n    </ion-item>\n    <ion-item *ngIf="workDescrip == null">\n      <ion-label text-left class="input-label" color="dark">工作任务简述</ion-label>\n      <ion-label text-end class="item" style="color: #000;">暂无数据</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        出发时间\n      </ion-label>\n      <ion-label text-end class="item" style="color: #000;">{{this.startTime}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        还车时间\n      </ion-label>\n      <ion-label text-end class="item" style="color: #000;">{{this.finishTime}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        始发地\n      </ion-label>\n      <ion-label text-end class="item" style="color: #000;">{{this.originAddress}}</ion-label>\n    </ion-item>\n    <ion-item *ngFor="let att of anArray; let idx = index">\n      <ion-label text-start class="item">目的地{{idx}}</ion-label>\n      <ion-label text-end type="text">att[idx]</ion-label>\n    </ion-item>\n  </ion-list>\n  <button class="button button-block button-positive" full (click)="accept()">\n    同意\n  </button>\n  <button class="button button-block button-positive" full (click)="reject()">\n    拒绝\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\approval-order-info\approval-order-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ApprovalOrderInfoPage);
    return ApprovalOrderInfoPage;
}());

//# sourceMappingURL=approval-order-info.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApproverHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__approval_order_info_approval_order_info__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ApproverHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApproverHomePage = /** @class */ (function () {
    function ApproverHomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tabsIndex = 0;
    }
    ApproverHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ApproverHomePage');
    };
    ApproverHomePage.prototype.switchTabs = function (index) {
        this.tabsIndex = index;
    };
    ApproverHomePage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    ApproverHomePage.prototype.goOrderInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__approval_order_info_approval_order_info__["a" /* ApprovalOrderInfoPage */]);
    };
    ApproverHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-approver-home',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\approver-home\approver-home.html"*/'<!--\n  Generated template for the ApproverHomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="content_head">\n\n  <ion-row class="head_nav_bar">\n    <ion-segment-button class="nav_back_button" (click)="goback()" item-start="">\n      <ion-icon name="arrow-back"></ion-icon>返回</ion-segment-button>\n    <ion-label align-items-center="" class="header">审批流</ion-label>\n  </ion-row>\n\n  <div class="col-33 col-offset-33 approvericon_wrap">\n    <img class="approvericon" src="assets/imgs/memberphoto.png" width="70px"/>\n  </div>\n  <div class="header_name">\n    <ion-label class="pname">Name</ion-label>\n    <ion-label class="dept">DEPT</ion-label>\n  </div>\n\n</ion-header>\n\n\n<ion-content padding has-subheader="false" class="content" delegate-handle="location" overflow-scroll="true">\n  <ion-row class="add_tab">\n    <ion-col class="col active"\n         (click)="switchTabs(0)"\n         ng-style="{color:views.tabIndex == 0?\'\':\'#bebebe\'}"\n          *ngIf="tabsIndex==0">\n      <ion-icon class="col_i" name="infinite"></ion-icon>\n      <ion-label class="col_p">待审批</ion-label>\n    </ion-col>\n    <ion-col class="col"\n         (click)="switchTabs(0)"\n         ng-style="{color:views.tabIndex == 0?\'\':\'#bebebe\'}"\n         *ngIf="tabsIndex!=0">\n      <ion-icon class="col_i" name="infinite"></ion-icon>\n      <ion-label class="col_p">待审批</ion-label>\n    </ion-col>\n    <ion-col class="col active"\n         (click)="switchTabs(1)"\n         ng-style="{color:views.tabIndex == 1?\'\':\'#bebebe\'}"\n          *ngIf="tabsIndex==1">\n      <ion-icon class="col_i" name="list-box"></ion-icon>\n      <ion-label class="col_p">已审批</ion-label>\n    </ion-col>\n    <ion-col class="col"\n         (click)="switchTabs(1)"\n         ng-style="{color:views.tabIndex == 1?\'\':\'#bebebe\'}"\n          *ngIf="tabsIndex!=1">\n      <ion-icon class="col_i" name="list-box"></ion-icon>\n      <ion-label class="col_p">已审批</ion-label>\n    </ion-col>\n  </ion-row>\n  <div class="con">\n    <div class="use_div" (click)="goOrderInfo()">\n      <ul class="use_ul">\n        <li class="use_ul_li">\n          <p class="use_ul_p">单号：</p>\n          <span class="use_ul_span">123321</span>\n        </li>\n        <li class="use_ul_li">\n          <p class="use_ul_p">申请日期：</p>\n          <span class="use_ul_span">2018/11/30</span>\n        </li>\n        <li class="use_ul_li">\n          <p class="use_ul_p">用车时间：</p>\n          <span class="use_ul_span">2018/1/30</span>\n        </li>\n        <li class="use_ul_li">\n          <p class="use_ul_p">出发地：</p>\n          <span class="use_ul_span">321</span>\n        </li>\n        <li class="use_ul_li">\n          <p class="use_ul_p">目的地：</p>\n          <span class="use_ul_span">456</span>\n        </li>\n\n      </ul>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\approver-home\approver-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ApproverHomePage);
    return ApproverHomePage;
}());

//# sourceMappingURL=approver-home.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarConsumeLogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apply_car_consume_log_apply_car_consume_log__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CarConsumeLogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CarConsumeLogPage = /** @class */ (function () {
    function CarConsumeLogPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tabsIndex = 0;
    }
    CarConsumeLogPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CarConsumeLogPage');
    };
    CarConsumeLogPage.prototype.switchTabs = function (index) {
        this.tabsIndex = index;
    };
    CarConsumeLogPage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    CarConsumeLogPage.prototype.carConsumeLogApply = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__apply_car_consume_log_apply_car_consume_log__["a" /* ApplyCarConsumeLogPage */]);
    };
    CarConsumeLogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-car-consume-log',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\car-consume-log\car-consume-log.html"*/'<!--\n  Generated template for the CarConsumeLogPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="content_head">\n\n  <ion-row class="head_nav_bar">\n    <ion-segment-button class="nav_back_button" (click)="goback()" item-start="">\n      <ion-icon name="arrow-back"></ion-icon>返回</ion-segment-button>\n    <ion-label align-items-center="" class="header">洗车、加油记录申请</ion-label>\n  </ion-row>\n\n  <div class="col-33 col-offset-33 approvericon_wrap">\n    <img class="approvericon" src="assets/imgs/memberphoto.png" width="70px"/>\n  </div>\n  <div class="header_name">\n    <ion-label class="pname">Name</ion-label>\n    <ion-label class="dept">DEPT</ion-label>\n  </div>\n\n</ion-header>\n\n\n<ion-content padding has-subheader="false" class="content" delegate-handle="location" overflow-scroll="true">\n  <ion-row class="add_tab">\n    <ion-col class="col active"\n             (click)="switchTabs(0)"\n             ng-style="{color:views.tabIndex == 0?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex==0">\n      <ion-icon class="col_i" name="car"></ion-icon>\n      <ion-label class="col_p">当前申请</ion-label>\n    </ion-col>\n    <ion-col class="col"\n             (click)="switchTabs(0)"\n             ng-style="{color:views.tabIndex == 0?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex!=0">\n      <ion-icon class="col_i" name="car"></ion-icon>\n      <ion-label class="col_p">当前申请</ion-label>\n    </ion-col>\n    <ion-col class="col active"\n             (click)="switchTabs(1)"\n             ng-style="{color:views.tabIndex == 1?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex==1">\n      <ion-icon class="col_i" name="list-box"></ion-icon>\n      <ion-label class="col_p">已完成</ion-label>\n    </ion-col>\n    <ion-col class="col"\n             (click)="switchTabs(1)"\n             ng-style="{color:views.tabIndex == 1?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex!=1">\n      <ion-icon class="col_i" name="list-box"></ion-icon>\n      <ion-label class="col_p">已完成</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-item class="padding-horizontal btn_div" *ngIf="tabsIndex==0">\n    <button class="button button-block button-positive" (click)="carConsumeLogApply()">\n      申请洗车、加油记录\n    </button>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\car-consume-log\car-consume-log.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CarConsumeLogPage);
    return CarConsumeLogPage;
}());

//# sourceMappingURL=car-consume-log.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarPeccancyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apply_car_peccancy_apply_car_peccancy__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CarPeccancyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CarPeccancyPage = /** @class */ (function () {
    function CarPeccancyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tabsIndex = 0;
        this.name = "name";
        this.dept = "dept";
    }
    CarPeccancyPage.prototype.switchTabs = function (index) {
        this.tabsIndex = index;
    };
    CarPeccancyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CarPeccancyPage');
    };
    CarPeccancyPage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    CarPeccancyPage.prototype.carPeccancyApply = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__apply_car_peccancy_apply_car_peccancy__["a" /* ApplyCarPeccancyPage */]);
    };
    CarPeccancyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-car-peccancy',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\car-peccancy\car-peccancy.html"*/'<!--\n  Generated template for the CarPeccancyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="content_head">\n\n  <ion-row class="head_nav_bar">\n    <ion-segment-button class="nav_back_button" (click)="goback()" item-start="">\n      <ion-icon name="arrow-back"></ion-icon>返回</ion-segment-button>\n    <ion-label align-items-center="" class="header">违章申请</ion-label>\n  </ion-row>\n\n  <div class="col-33 col-offset-33 approvericon_wrap">\n    <img class="approvericon" src="assets/imgs/memberphoto.png" width="70px"/>\n  </div>\n  <div class="header_name">\n    <p class="pname">{{this.name}}</p>\n    <span class="dept">({{this.dept}})</span>\n  </div>\n\n</ion-header>\n\n\n<ion-content padding has-subheader="false" class="content" delegate-handle="location" overflow-scroll="true">\n  <ion-row class="add_tab">\n    <ion-col class="col active"\n             (click)="switchTabs(0)"\n             ng-style="{color:views.tabIndex == 0?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex==0">\n      <ion-icon class="col_i" name="car"></ion-icon>\n      <ion-label class="col_p">当前违章申请</ion-label>\n    </ion-col>\n    <ion-col class="col"\n             (click)="switchTabs(0)"\n             ng-style="{color:views.tabIndex == 0?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex!=0">\n      <ion-icon class="col_i" name="car"></ion-icon>\n      <ion-label class="col_p">当前违章申请</ion-label>\n    </ion-col>\n    <ion-col class="col active"\n             (click)="switchTabs(1)"\n             ng-style="{color:views.tabIndex == 1?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex==1">\n      <ion-icon class="col_i" name="list-box"></ion-icon>\n      <ion-label class="col_p">违章记录</ion-label>\n    </ion-col>\n    <ion-col class="col"\n             (click)="switchTabs(1)"\n             ng-style="{color:views.tabIndex == 1?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex!=1">\n      <ion-icon class="col_i" name="list-box"></ion-icon>\n      <ion-label class="col_p">违章记录</ion-label>\n    </ion-col>\n  </ion-row>\n\n  <ion-item class="padding-horizontal btn_div" *ngIf="tabsIndex==0">\n    <button class="button button-block button-positive" (click)="carPeccancyApply()">\n      违章登记\n    </button>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\car-peccancy\car-peccancy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CarPeccancyPage);
    return CarPeccancyPage;
}());

//# sourceMappingURL=car-peccancy.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarMonitorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CarMonitorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CarMonitorPage = /** @class */ (function () {
    //地图对象
    function CarMonitorPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.id = 123321;
        this.plateNumber = "33312";
        this.driverName = "hi";
        this.getInfo();
        this.wholeinfo = '单号:' + this.id + '\n' +
            '司机:' + this.driverName + '\n' +
            '车牌:' + this.plateNumber;
    }
    CarMonitorPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: this.wholeinfo,
            buttons: ['确定']
        });
        alert.present();
    };
    CarMonitorPage.prototype.getInfo = function () {
        this.id = "4695";
        this.driverName = "司机01";
        this.plateNumber = "A34567";
    };
    CarMonitorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CarMonitorPage');
    };
    CarMonitorPage.prototype.ionViewDidEnter = function () {
        this.load();
    };
    CarMonitorPage.prototype.load = function () {
        this.map = new AMap.Map(this.map_container2.nativeElement, {
            view: new AMap.View2D({
                center: [113.350912, 23.119495],
                zoom: 16,
                rotateEnable: true,
                showBuildingBlock: true
            })
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map_container'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], CarMonitorPage.prototype, "map_container2", void 0);
    CarMonitorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-car-monitor',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\car-monitor\car-monitor.html"*/'<!--\n  Generated template for the CarMonitorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar align-items-center color="primary">\n    <ion-title>车辆监控</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row>\n      <input type="text" class="search" placeholder="输入车牌号查找" id="search">\n      <button class="button button-positive" color="primary" ng-click="searchCarPosition()">\n        <ion-icon class="icon" name="search"></ion-icon>\n      </button>\n  </ion-row>\n  <div #map_container class="map_container2"></div>\n  <ion-row class="show">\n    <ion-col class="showCon">\n      <ion-item class="showCon-div" (click)="goApproverHome()">\n        <p class="p2">已调度</p>\n        <p class="pCon">{{this.scheduled}}次</p>\n      </ion-item>\n      <ion-item class="twoli" (click)="showAlert()">\n        <p class="p3">正在执行</p>\n        <p class="pCon">{{this.doing}}单</p>\n      </ion-item>\n      <ion-item class="showCon-div" (click)="goApproverHome()">\n        <p class="p4">已完成</p>\n        <p class="pCon">{{this.scheduled}}次</p>\n      </ion-item>\n\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\car-monitor\car-monitor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], CarMonitorPage);
    return CarMonitorPage;
}());

//# sourceMappingURL=car-monitor.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseDeptPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChooseDeptPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChooseDeptPage = /** @class */ (function () {
    function ChooseDeptPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChooseDeptPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChooseDeptPage');
    };
    ChooseDeptPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-choose-dept',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\choose-dept\choose-dept.html"*/'<!--\n  Generated template for the ChooseDeptPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar align-title="center" color="primary">\n    <ion-title>选择部门</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\choose-dept\choose-dept.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ChooseDeptPage);
    return ChooseDeptPage;
}());

//# sourceMappingURL=choose-dept.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseStatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChooseStatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChooseStatusPage = /** @class */ (function () {
    function ChooseStatusPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.statuses = [];
        this.selectedArray = [];
        this.null = null;
        this.getStatus();
    }
    ChooseStatusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChooseStatusPage');
    };
    ChooseStatusPage.prototype.logForm = function (form) {
        alert(form.value);
    };
    ChooseStatusPage.prototype.confirmStatus = function () {
        var _this = this;
        this.navCtrl.pop().then(function () {
            _this.navParams.get('callback')(_this.selectedArray);
        });
    };
    ChooseStatusPage.prototype.select = function (data) {
        if (data.checked == true) {
            this.selectedArray.push(data);
        }
        else {
            var newArray = this.selectedArray.filter(function (el) {
                return el.testID !== data.testID;
            });
            this.selectedArray = newArray;
        }
        console.log(this.selectedArray);
    };
    ChooseStatusPage.prototype.getStatus = function () {
        this.statuses = [
            { name: "未调度", id: 1, checked: false },
            { name: "待分配", id: 2, checked: false },
            { name: "待重新分配", id: 3, checked: false },
            { name: "待出车", id: 4, checked: false },
            { name: "进行中", id: 5, checked: false },
            { name: "待回场", id: 6, checked: false },
            { name: "已完成", id: 7, checked: false },
            { name: "已评价", id: 8, checked: false },
            { name: "已取消", id: 9, checked: false },
            { name: "等待确认", id: 10, checked: false },
            { name: "待确认回场", id: 11, checked: false },
            { name: "待审批", id: 12, checked: false },
            { name: "审批拒绝", id: 13, checked: false },
            { name: "强制回场", id: 14, checked: false },
        ];
    };
    ChooseStatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-choose-status',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\choose-status\choose-status.html"*/'<!--\n  Generated template for the ChooseStatusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>选择状态</ion-title>\n    <ion-buttons end>\n      <button class="button-positive" (click)="confirmStatus()">确定</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n      <ion-item *ngFor="let status of statuses">\n        <ion-label>{{status.name}}</ion-label>\n        <ion-checkbox (click)="select(status)" [(ngModel)]="status.checked"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\choose-status\choose-status.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ChooseStatusPage);
    return ChooseStatusPage;
}());

//# sourceMappingURL=choose-status.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealCarConsumeLogPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DealCarConsumeLogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DealCarConsumeLogPage = /** @class */ (function () {
    function DealCarConsumeLogPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tabsIndex = 0;
    }
    DealCarConsumeLogPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DealCarConsumeLogPage');
    };
    DealCarConsumeLogPage.prototype.switchTabs = function (index) {
        this.tabsIndex = index;
    };
    DealCarConsumeLogPage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    DealCarConsumeLogPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-deal-car-consume-log',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\deal-car-consume-log\deal-car-consume-log.html"*/'<!--\n  Generated template for the DealCarConsumeLogPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="content_head">\n\n  <ion-row class="head_nav_bar">\n    <ion-segment-button class="nav_back_button" (click)="goback()" item-start="">\n      <ion-icon name="arrow-back"></ion-icon>返回</ion-segment-button>\n    <ion-label align-items-center="" class="header">洗车加油审批</ion-label>\n  </ion-row>\n\n  <div class="col-33 col-offset-33 approvericon_wrap">\n    <img class="approvericon" src="assets/imgs/memberphoto.png" width="70px"/>\n  </div>\n  <div class="header_name">\n    <ion-label class="pname">Name</ion-label>\n    <ion-label class="dept">DEPT</ion-label>\n  </div>\n\n</ion-header>\n\n\n<ion-content padding has-subheader="false" class="content" delegate-handle="location" overflow-scroll="true">\n  <ion-row class="add_tab">\n    <ion-col class="col active"\n             (click)="switchTabs(0)"\n             ng-style="{color:views.tabIndex == 0?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex==0">\n      <ion-icon class="col_i" name="infinite"></ion-icon>\n      <ion-label class="col_p">未审批</ion-label>\n    </ion-col>\n    <ion-col class="col"\n             (click)="switchTabs(0)"\n             ng-style="{color:views.tabIndex == 0?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex!=0">\n      <ion-icon class="col_i" name="infinite"></ion-icon>\n      <ion-label class="col_p">未审批</ion-label>\n    </ion-col>\n    <ion-col class="col active"\n             (click)="switchTabs(1)"\n             ng-style="{color:views.tabIndex == 1?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex==1">\n      <ion-icon class="col_i" name="list-box"></ion-icon>\n      <ion-label class="col_p">已审批</ion-label>\n    </ion-col>\n    <ion-col class="col"\n             (click)="switchTabs(1)"\n             ng-style="{color:views.tabIndex == 1?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex!=1">\n      <ion-icon class="col_i" name="list-box"></ion-icon>\n      <ion-label class="col_p">已审批</ion-label>\n    </ion-col>\n  </ion-row>\n  <div class="con">\n    <div class="use_div">\n      <ul class="use_ul">\n        <li class="use_ul_li">\n          <p class="use_ul_p">单号：</p>\n          <span class="use_ul_span">123321</span>\n        </li>\n        <li class="use_ul_li">\n          <p class="use_ul_p">申请日期：</p>\n          <span class="use_ul_span">2018/11/30</span>\n        </li>\n        <li class="use_ul_li">\n          <p class="use_ul_p">用车时间：</p>\n          <span class="use_ul_span">2018/1/30</span>\n        </li>\n        <li class="use_ul_li">\n          <p class="use_ul_p">出发地：</p>\n          <span class="use_ul_span">321</span>\n        </li>\n        <li class="use_ul_li">\n          <p class="use_ul_p">目的地：</p>\n          <span class="use_ul_span">456</span>\n        </li>\n\n      </ul>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\deal-car-consume-log\deal-car-consume-log.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DealCarConsumeLogPage);
    return DealCarConsumeLogPage;
}());

//# sourceMappingURL=deal-car-consume-log.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealCarPeccancyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DealCarPeccancyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DealCarPeccancyPage = /** @class */ (function () {
    function DealCarPeccancyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tabsIndex = 0;
    }
    DealCarPeccancyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DealCarPeccancyPage');
    };
    DealCarPeccancyPage.prototype.switchTabs = function (index) {
        this.tabsIndex = index;
    };
    DealCarPeccancyPage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    DealCarPeccancyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-deal-car-peccancy',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\deal-car-peccancy\deal-car-peccancy.html"*/'<!--\n  Generated template for the DealCarPeccancyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="content_head">\n\n  <ion-row class="head_nav_bar">\n    <ion-segment-button class="nav_back_button" (click)="goback()" item-start="">\n      <ion-icon name="arrow-back"></ion-icon>返回</ion-segment-button>\n    <ion-label align-items-center="" class="header">违章处理</ion-label>\n  </ion-row>\n\n  <div class="col-33 col-offset-33 approvericon_wrap">\n    <img class="approvericon" src="assets/imgs/memberphoto.png" width="70px"/>\n  </div>\n  <div class="header_name">\n    <ion-label class="pname">Name</ion-label>\n    <ion-label class="dept">DEPT</ion-label>\n  </div>\n\n</ion-header>\n\n\n<ion-content padding has-subheader="false" class="content" delegate-handle="location" overflow-scroll="true">\n  <ion-row class="add_tab">\n    <ion-col class="col active"\n             (click)="switchTabs(0)"\n             ng-style="{color:views.tabIndex == 0?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex==0">\n      <ion-icon class="col_i" name="car"></ion-icon>\n      <ion-label class="col_p">违章处理</ion-label>\n    </ion-col>\n    <ion-col class="col"\n             (click)="switchTabs(0)"\n             ng-style="{color:views.tabIndex == 0?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex!=0">\n      <ion-icon class="col_i" name="car"></ion-icon>\n      <ion-label class="col_p">违章处理</ion-label>\n    </ion-col>\n    <ion-col class="col active"\n             (click)="switchTabs(1)"\n             ng-style="{color:views.tabIndex == 1?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex==1">\n      <ion-icon class="col_i" name="list-box"></ion-icon>\n      <ion-label class="col_p">已完成</ion-label>\n    </ion-col>\n    <ion-col class="col"\n             (click)="switchTabs(1)"\n             ng-style="{color:views.tabIndex == 1?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex!=1">\n      <ion-icon class="col_i" name="list-box"></ion-icon>\n      <ion-label class="col_p">已完成</ion-label>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\deal-car-peccancy\deal-car-peccancy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DealCarPeccancyPage);
    return DealCarPeccancyPage;
}());

//# sourceMappingURL=deal-car-peccancy.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DispatchHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DispatchHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DispatchHomePage = /** @class */ (function () {
    function DispatchHomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tabsIndex = 0;
        this.DispatchedTask = 61;
        this.WaitingDispatcherTask = 0;
        this.dept = "dept";
        this.name = "name";
    }
    DispatchHomePage.prototype.switchTabs = function (index) {
        this.tabsIndex = index;
    };
    DispatchHomePage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    DispatchHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DispatchHomePage');
    };
    DispatchHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-dispatch-home',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\dispatch-home\dispatch-home.html"*/'<!--\n  Generated template for the DispatchHomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="content_head">\n\n  <ion-row class="head_nav_bar">\n    <ion-segment-button class="nav_back_button" (click)="goback()" item-start="">\n      <ion-icon name="arrow-back"></ion-icon>返回</ion-segment-button>\n    <ion-label align-items-center="" class="header">车辆调度</ion-label>\n  </ion-row>\n\n  <div class="col-33 col-offset-33 approvericon_wrap">\n    <img class="approvericon" src="assets/imgs/memberphoto.png" width="70px"/>\n  </div>\n  <div class="header_name">\n    <p class="pname">{{this.name}}</p>\n    <span class="dept">({{this.dept}})</span>\n    <span class="tip">（数据为累计数据）</span>\n  </div>\n  <ion-row class="head_times">\n    <ion-label class="w50">总调度次数:{{this.DispatchedTask}}</ion-label>\n    <ion-label class="w50">待调度任务数:{{this.WaitingDispatcherTask}}</ion-label>\n  </ion-row>\n\n</ion-header>\n\n\n<ion-content padding has-subheader="false" class="content" delegate-handle="location" overflow-scroll="true">\n  <ion-row class="add_tab">\n    <ion-col class="col active"\n             (click)="switchTabs(0)"\n             ng-style="{color:views.tabIndex == 0?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex==0">\n      <ion-icon class="col_i" name="infinite"></ion-icon>\n      <ion-label class="col_p">调度池</ion-label>\n    </ion-col>\n    <ion-col class="col"\n             (click)="switchTabs(0)"\n             ng-style="{color:views.tabIndex == 0?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex!=0">\n      <ion-icon class="col_i" name="infinite"></ion-icon>\n      <ion-label class="col_p">调度池</ion-label>\n    </ion-col>\n    <ion-col class="col active"\n             (click)="switchTabs(1)"\n             ng-style="{color:views.tabIndex == 1?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex==1">\n      <ion-icon class="col_i" name="list-box"></ion-icon>\n      <ion-label class="col_p">已调度</ion-label>\n    </ion-col>\n    <ion-col class="col"\n             (click)="switchTabs(1)"\n             ng-style="{color:views.tabIndex == 1?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex!=1">\n      <ion-icon class="col_i" name="list-box"></ion-icon>\n      <ion-label class="col_p">已调度</ion-label>\n    </ion-col>\n  </ion-row>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\dispatch-home\dispatch-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DispatchHomePage);
    return DispatchHomePage;
}());

//# sourceMappingURL=dispatch-home.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driver_order_info_driver_order_info__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DriverHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DriverHomePage = /** @class */ (function () {
    function DriverHomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tabsIndex = 0;
    }
    DriverHomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DriverHomePage');
    };
    DriverHomePage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    DriverHomePage.prototype.switchTabs = function (index) {
        this.tabsIndex = index;
    };
    DriverHomePage.prototype.goOrderInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__driver_order_info_driver_order_info__["a" /* DriverOrderInfoPage */]);
    };
    DriverHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-driver-home',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\driver-home\driver-home.html"*/'<!--\n  Generated template for the DriverHomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="content_head">\n\n  <ion-row class="head_nav_bar">\n    <ion-segment-button class="nav_back_button" (click)="goback()" item-start="">\n      <ion-icon name="arrow-back"></ion-icon>返回</ion-segment-button>\n    <ion-label align-items-center="" class="header">车辆管理移动应用</ion-label>\n  </ion-row>\n\n  <div class="col-33 col-offset-33 approvericon_wrap">\n    <img class="approvericon" src="assets/imgs/memberphoto.png" width="70px"/>\n  </div>\n  <div class="header_name">\n    <ion-label class="pname">Name</ion-label>\n    <ion-label class="dept">DEPT</ion-label>\n  </div>\n  <ion-row class="head_times">\n    <ion-label class="w50">本月出勤数:天</ion-label>\n    <ion-label class="w50">总工作里程:公里</ion-label>\n  </ion-row>\n\n</ion-header>\n\n\n<ion-content padding has-subheader="false" class="content" delegate-handle="location" overflow-scroll="true">\n  <ion-row class="row add_tab">\n    <ion-col class="col"\n    (click)="switchTabs(0)"\n    *ngIf="tabsIndex!=0">\n      <ion-icon class="col_i" name="car" (click)="switchTabs(0)"></ion-icon>\n      <ion-label class="col_p">任务池</ion-label>\n    </ion-col>\n    <ion-col class="col active"\n             (click)="switchTabs(0)"\n             *ngIf="tabsIndex==0">\n      <ion-icon class="col_i" name="car" (click)="switchTabs(0)"></ion-icon>\n      <ion-label class="col_p">任务池</ion-label>\n    </ion-col>\n    <ion-col class="col active"\n             (click)="switchTabs(1)"\n             *ngIf="tabsIndex==1">\n      <ion-icon class="col_i" name="list-box" (click)="switchTabs(1)"></ion-icon>\n      <ion-label class="col_p">任务执行中</ion-label>\n    </ion-col>\n    <ion-col class="col"\n    (click)="switchTabs(1)"\n    *ngIf="tabsIndex!=1">\n      <ion-icon class="col_i" name="list-box" (click)="switchTabs(1)"></ion-icon>\n      <ion-label class="col_p">任务执行中</ion-label>\n    </ion-col>\n    <ion-col class="col active"\n             (click)="switchTabs(2)"\n             *ngIf="tabsIndex==2">\n      <ion-icon class="col_i" name="chatboxes" (click)="switchTabs(2)"></ion-icon>\n      <ion-label class="col_p">我的任务</ion-label>\n    </ion-col>\n    <ion-col class="col"\n             (click)="switchTabs(2)"\n             *ngIf="tabsIndex!=2">\n      <ion-icon class="col_i" name="chatboxes" (click)="switchTabs(2)"></ion-icon>\n      <ion-label class="col_p">我的任务</ion-label>\n    </ion-col>\n  </ion-row>\n  <div class="con" *ngIf="tabsIndex==1">\n    <div class="use_div" (click)="goOrderInfo()">\n      <ul class="use_ul">\n        <li class="use_ul_li">\n          <p class="use_ul_p">单号：</p>\n          <span class="use_ul_span">123321</span>\n        </li>\n        <li class="use_ul_li">\n          <p class="use_ul_p">申请日期：</p>\n          <span class="use_ul_span">2018/11/30</span>\n        </li>\n        <li class="use_ul_li">\n          <p class="use_ul_p">用车时间：</p>\n          <span class="use_ul_span">2018/1/30</span>\n        </li>\n        <li class="use_ul_li">\n          <p class="use_ul_p">出发地：</p>\n          <span class="use_ul_span">321</span>\n        </li>\n        <li class="use_ul_li">\n          <p class="use_ul_p">目的地：</p>\n          <span class="use_ul_span">456</span>\n        </li>\n\n      </ul>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\driver-home\driver-home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DriverHomePage);
    return DriverHomePage;
}());

//# sourceMappingURL=driver-home.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverOrderInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DriverOrderInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DriverOrderInfoPage = /** @class */ (function () {
    function DriverOrderInfoPage(navCtrl, navParams, callNum) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.callNum = callNum;
        this.deptName = "dept";
        this.applicantName = "name";
        this.applicantPhone = "333111222";
        this.passengerCount = 3;
        this.orderComment = "yii";
        this.workDescrip = "nnnnnn";
        this.startTime = "2018/09/10";
        this.finishTime = "2018/09/11";
        this.returnTime = "2018/09/11";
        this.originAddress = "33321";
        this.anArray = [];
        this.index = 3;
        this.null = null;
        this.carType = "312";
        this.carBrand = "Pagani";
        this.plateNumber = "A123456";
        this.driverName = "mmn";
        this.phone = "3331111234";
        this.dispatcherComment = "3213";
        this.dispatcherShow = false;
        this.carInfoShow = true;
        this.driverInfoShow = true;
        this.cancelInfoShow = false;
        this.showReturnDrive = true;
        this.showFee = true;
        this.showParkingFeeInput = false;
        this.showStartDrive = false;
        this.showFinishDrive = false;
        this.showCancelSelector = false;
        this.showAcceptAndReject = false;
        this.mileage = "30";
        this.startMileage = "20";
        this.parkingFee = "0";
        this.true = "true";
        this.false = "false";
        this.loop();
    }
    DriverOrderInfoPage.prototype.loop = function () {
        for (var i = 0; i < this.index; i++) {
            this.anArray[i] = "a1";
        }
    };
    DriverOrderInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DriverOrderInfoPage');
    };
    DriverOrderInfoPage.prototype.callNumber = function (phoneNum) {
        this.callNum.callNumber(phoneNum, true);
    };
    DriverOrderInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-driver-order-info',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\driver-order-info\driver-order-info.html"*/'<!--\n  Generated template for the DriverOrderInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>行程信息</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-divider class="item-divider">\n      <ion-label color="primary">申请信息</ion-label>\n    </ion-item-divider>\n    <ion-item>\n      <ion-label>\n        用车部门\n      </ion-label>\n      <ion-label text-end class="item" style="color: #000;">{{this.deptName}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        申&ensp;请&ensp;人\n      </ion-label>\n      <ion-label text-end class="item" style="color: #000;">{{this.applicantName}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        联系电话\n      </ion-label>\n      <ion-label text-end class="item" style="color: #000;" (click)="callNumber(this.applicantPhone)">{{this.applicantPhone}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        乘车人数\n      </ion-label>\n      <ion-label text-end class="item" style="color: #000;">{{this.passengerCount}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        用车事由\n      </ion-label>\n      <ion-label text-end class="item" style="color: #000;">{{this.orderComment}}</ion-label>\n    </ion-item>\n    <ion-item *ngIf="workDescrip != null">\n      <ion-label text-left class="input-label" color="dark">工作任务简述</ion-label>\n      <ion-label text-end class="item" style="color: #000;">{{this.workDescrip}}</ion-label>\n    </ion-item>\n    <ion-item *ngIf="workDescrip == null">\n      <ion-label text-left class="input-label" color="dark">工作任务简述</ion-label>\n      <ion-label text-end class="item" style="color: #000;">暂无数据</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        出发时间\n      </ion-label>\n      <ion-label text-end class="item" style="color: #000;">{{this.startTime}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        还车时间\n      </ion-label>\n      <ion-label text-end class="item" style="color: #000;">{{this.finishTime}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        始发地\n      </ion-label>\n      <ion-label text-end class="item" style="color: #000;">{{this.originAddress}}</ion-label>\n    </ion-item>\n    <ion-item *ngFor="let att of anArray; let idx = index">\n      <ion-label text-start class="item">目的地{{idx}}</ion-label>\n      <ion-label text-end type="text">att[idx]</ion-label>\n    </ion-item>\n    <div *ngIf="dispatcherShow == true">\n      <ion-item>\n        <ion-label>\n          调度员备注\n        </ion-label>\n        <ion-label text-end class="item" style="color: #000;">{{this.dispatcherComment}}</ion-label>\n      </ion-item>\n    </div>\n    <div *ngIf="carInfoShow == true">\n    <ion-item-divider class="item-divider">\n      <ion-label color="primary">车辆信息</ion-label>\n    </ion-item-divider>\n    <ion-item>\n      <ion-label>\n        调配车型\n      </ion-label>\n      <ion-label text-end class="item" style="color: #000;">{{this.carType}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        厂牌型号\n      </ion-label>\n      <ion-label text-end class="item" style="color: #000;">{{this.carBrand}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        车牌号码\n      </ion-label>\n      <ion-label text-end class="item" style="color: #000;">{{this.plateNumber}}</ion-label>\n    </ion-item>\n    </div>\n    <div *ngIf="driverInfoShow == true">\n    <ion-item-divider class="item-divider">\n      <ion-label color="primary">司机信息</ion-label>\n    </ion-item-divider>\n    <ion-item>\n      <ion-label>\n        名称\n      </ion-label>\n      <ion-label text-end class="item" style="color: #000;">{{this.driverName}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        联系电话\n      </ion-label>\n      <ion-label text-end class="item" style="color: #000;">{{this.phone}}</ion-label>\n    </ion-item>\n    </div>\n    <div *ngIf="cancelInfoShow == true">\n      <ion-item class="item-divider">\n        <ion-label color="primary">正式出车</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          上次回场里程数\n        </ion-label>\n        <ion-label text-end class="item" style="color: #000;">{{this.mileage}}公里</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          实际里程数\n        </ion-label>\n        <ion-input placeholder="请输入公里数" [(ngModel)]="actualMileage" text-end class="item" style="color: #000;"></ion-input>\n      </ion-item>\n    </div>\n    <div *ngIf="driverInfoShow == true">\n      <ion-item-divider class="item-divider">\n        <ion-label color="primary">行程信息</ion-label>\n      </ion-item-divider>\n      <ion-item>\n        <ion-label>\n          开始时间\n        </ion-label>\n        <ion-label text-end class="item" style="color: #000;">{{this.startTime}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          开始里程\n        </ion-label>\n        <ion-label text-end class="item" style="color: #000;">{{this.startMileage}}</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          回场时间\n        </ion-label>\n        <ion-label text-end class="item" style="color: #000;">{{this.returnTime}}</ion-label>\n      </ion-item>\n    </div>\n    <div *ngIf="showReturnDrive == true">\n      <ion-item-divider class="item-divider">\n        <ion-label color="primary">车辆回场</ion-label>\n      </ion-item-divider>\n      <ion-item>\n        <ion-label>\n          车辆回场里程\n        </ion-label>\n        <ion-input placeholder="请输入公里数" [(ngModel)]="returnMileage" text-end class="item" style="color: #000;"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          本次累计出车里程\n        </ion-label>\n        <ion-input placeholder="请输入公里数" [(ngModel)]="driverMileage" text-end class="item" style="color: #000;"></ion-input>\n      </ion-item>\n    </div>\n    <div *ngIf="showFee == true">\n      <ion-item-divider class="item-divider">\n        <ion-label color="primary">相关费用</ion-label>\n      </ion-item-divider>\n      <ion-item *ngIf="showParkingFeeInput == true">\n        <ion-label>\n          停车保管费\n        </ion-label>\n        <ion-input placeholder="请输入停车保管费" [(ngModel)]="driverMileage" text-end class="item" style="color: #000;"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          停车保管费\n        </ion-label>\n        <ion-label text-end class="item" style="color: #000;">{{this.parkingFee}}元</ion-label>\n      </ion-item>\n    </div>\n  </ion-list>\n  <button class="button button-block button-positive" *ngIf="showStartDrive == true" full (click)="start()">\n    开始出车\n  </button>\n  <button class="button button-block button-positive" *ngIf="showFinishDrive == true" full (click)="finish()">\n    结束用车\n  </button>\n  <button class="button button-block button-positive" *ngIf="showReturnDrive == true" full (click)="return()">\n    车辆回场\n  </button>\n  <button class="button button-block button-positive" *ngIf="showCancelSelector == true" full (click)="showCancelApply()">\n    取消申请\n  </button>\n  <button class="button button-block button-positive" *ngIf="showAcceptAndReject == true" full (click)="accept()">\n    接受\n  </button>\n  <button class="button button-block button-positive" *ngIf="showAcceptAndReject == true" full (click)="reject()">\n    拒绝\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\driver-order-info\driver-order-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */]])
    ], DriverOrderInfoPage);
    return DriverOrderInfoPage;
}());

//# sourceMappingURL=driver-order-info.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choose_dept_choose_dept__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reset_password_reset_password__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modify_phone_modify_phone__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_global_data_global_data__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the MemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MemberPage = /** @class */ (function () {
    function MemberPage(navCtrl, navParams, storage, globalData) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.globalData = globalData;
        this.storage.get('user').then(function (data) {
            _this.globalData.set_user(JSON.parse(data));
            _this.name = _this.globalData.get_user().name;
            _this.dept = _this.globalData.get_user().deptName;
        });
    }
    MemberPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MemberPage');
    };
    MemberPage.prototype.goModifyDepartment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__choose_dept_choose_dept__["a" /* ChooseDeptPage */]);
    };
    MemberPage.prototype.goResetPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__reset_password_reset_password__["a" /* ResetPasswordPage */]);
    };
    MemberPage.prototype.goModifyPhone = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__modify_phone_modify_phone__["a" /* ModifyPhonePage */]);
    };
    MemberPage.prototype.goAboutUs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__about_about__["a" /* AboutPage */]);
    };
    MemberPage.prototype.logout = function () {
        this.storage.remove('USER_INFO');
        this.storage.remove('user');
        this.storage.remove('token');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    MemberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-member',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\member\member.html"*/'<!--\n  Generated template for the MemberPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar align-title="center" color="primary">\n    <ion-title>个人中心</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding has-subheader="false" class="content">\n  <ion-list class="pic_div">\n    <ion-item class="item-avatar">\n      <img class="user_header" src="assets/imgs/memberphoto.png" width="50px">\n      <h1 ion-text class="member_name"><span class="name_span">{{this.name}}</span> </h1>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n      <ion-item item-start (click)="goModifyDepartment()">\n        <ion-icon icon-left name="key" color="positive"> </ion-icon>\n         {{this.dept}}\n        <ion-icon item-right class="arrow_color" name="arrow-forward"> </ion-icon>\n      </ion-item>\n    <ion-item item-start (click)="goResetPassword()">\n      <ion-icon icon-left name="key" color="positive"> </ion-icon>\n      修改密码\n      <ion-icon item-right class="arrow_color" name="arrow-forward"> </ion-icon>\n    </ion-item>\n    <ion-item item-start (click)="goModifyPhone()">\n      <ion-icon icon-left name="key" color="positive"> </ion-icon>\n      修改联系电话\n      <ion-icon item-right class="arrow_color" name="arrow-forward"> </ion-icon>\n    </ion-item>\n    <ion-item item-start (click)="goAboutUs()">\n      <ion-icon icon-left name="person" color="positive"> </ion-icon>\n      关于我们\n      <ion-icon item-right class="arrow_color" name="arrow-forward"> </ion-icon>\n    </ion-item>\n    <button ion-button full margin-top=30px (click)="logout()" >退出</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\member\member.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_8__providers_global_data_global_data__["a" /* GlobalData */]])
    ], MemberPage);
    return MemberPage;
}());

//# sourceMappingURL=member.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetPasswordPage = /** @class */ (function () {
    function ResetPasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ResetPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetPasswordPage');
    };
    ResetPasswordPage.prototype.resetPwd = function (oldPwd, newPwd, newConfirmPwd) {
        if (oldPwd.value.length == 0) {
            alert("请输入原密码");
        }
        else if (newPwd.value.length == 0) {
            alert("请输入新的密码");
        }
        else if (newPwd.value != newConfirmPwd.value) {
            alert("输入的新密码不一致");
        }
        else if (newPwd.value.length < 8 || newPwd.value.length > 18) {
            alert("密码长度必须为8-18位");
        }
        else if (oldPwd.value == newPwd.value) {
            alert("输入的新密码与旧密码一致");
        }
    };
    ResetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-reset-password',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\reset-password\reset-password.html"*/'<!--\n  Generated template for the ResetPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar align-title="center" color="primary">\n    <ion-title>修改密码</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding has-subheader="false" class="content">\n  <ion-list class="list">\n    <ion-item>\n      <ion-label color="dark" class="label">原密码 :</ion-label>\n      <ion-input type="text" clearInput placeholder="请输入您的原密码" class="input_label" #oldPwd></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="dark" class="label">新的密码 :</ion-label>\n      <ion-input [type]="isShow ? \'text\':\'password\'" clearInput placeholder="请输入您的新密码" class="input_label" #newPwd></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="dark" class="label">确认密码 :</ion-label>\n      <ion-input [type]="isShow ? \'text\':\'password\'" clearInput placeholder="请再次输入您的新密码" class="input_label" #newConfirmPwd></ion-input>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label>\n        <ion-icon [ios]="isShow ? \'ios-eye\' : \'ios-eye-off\'" [md]="isShow ? \'md-eye\' : \'md-eye-off\'"></ion-icon>\n        显示密码</ion-label>\n      <ion-toggle checked="false" [(ngModel)]="isShow"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <button class="button button-block button-positive"  full (click)="resetPwd(oldPwd,newPwd,newConfirmPwd)">\n        确认修改\n      </button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\reset-password\reset-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());

//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifyPhonePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_data_global_data__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ModifyPhonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModifyPhonePage = /** @class */ (function () {
    function ModifyPhonePage(navCtrl, navParams, globalData, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalData = globalData;
        this.storage = storage;
        this.storage.get('user').then(function (data) {
            _this.globalData.set_user(JSON.parse(data));
            console.log(_this.globalData.get_user().mobileNumber);
            _this.phone = _this.globalData.get_user().mobileNumber;
        });
    }
    ModifyPhonePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModifyPhonePage');
    };
    ModifyPhonePage.prototype.updatePhone = function () {
        console.log('123321');
    };
    ModifyPhonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modify-phone',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\modify-phone\modify-phone.html"*/'<!--\n  Generated template for the ModifyPhonePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar align-title="center" color="primary">\n    <ion-title>修改联系电话</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding has-subheader="false" class="content">\n  <ion-item item-start>\n    <ion-input type="text" clearInput placeholder="请输入您的联系电话" #phoneNum [(ngModel)]="this.phone"></ion-input>\n  </ion-item>\n  <ion-item>\n    <button ion-button block positive class="button-positive" (click)="updatePhone()">\n      确认修改\n    </button>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\modify-phone\modify-phone.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_global_data_global_data__["a" /* GlobalData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_global_data_global_data__["a" /* GlobalData */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _d || Object])
    ], ModifyPhonePage);
    return ModifyPhonePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=modify-phone.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportTablePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__use_car_count_use_car_count__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ReportTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportTablePage = /** @class */ (function () {
    function ReportTablePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReportTablePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReportTablePage');
    };
    ReportTablePage.prototype.goUseCarCount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__use_car_count_use_car_count__["a" /* UseCarCountPage */]);
    };
    ReportTablePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-report-table',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\report-table\report-table.html"*/'<!--\n  Generated template for the ReportTablePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar align-title="center" color="primary">\n    <ion-title>报表</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding has-subheader="false" class="content padding">\n  <ion-row class="menu">\n    <ion-row justify-content-center align-items-center class="li" (click)="goUseCarCount()">\n      <img align-items-center class="li_img" src="../assets/imgs/icon_home_apply.png"><br>\n      <ion-label>部门用车统计</ion-label>\n    </ion-row>\n    <ion-row justify-content-center align-items-center class="li">\n      <img class="li_img" src="../assets/imgs/icon_report_car.png"><br>\n      <ion-label>车辆使用明细</ion-label>\n    </ion-row>\n  </ion-row>\n  <ion-row class="menu">\n    <ion-row justify-content-center align-items-center class="li">\n\n      <img class="li_img" src="../assets/imgs/icon_home_dispatch.png"><br>\n      <ion-label>司机评价统计</ion-label>\n    </ion-row>\n    <ion-row justify-content-center align-items-center class="li">\n      <img class="li_img" src="../assets/imgs/icon_report_mileage_count.png"><br>\n      <ion-label>司机里程统计</ion-label>\n    </ion-row>\n  </ion-row>\n  <ion-row class="menu">\n    <ion-row justify-content-center align-items-center class="li">\n      <img class="li_img" src="../assets/imgs/icon_report_mileage_count.png"><br>\n      <ion-label>司机里程明细</ion-label>\n    </ion-row>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\report-table\report-table.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ReportTablePage);
    return ReportTablePage;
}());

//# sourceMappingURL=report-table.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UseCarCountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choose_status_choose_status__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the UseCarCountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UseCarCountPage = /** @class */ (function () {
    function UseCarCountPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.statusList = null;
        this.id = "123";
        this.applicantName = "nnnqw";
        this.startTime = '01/12 12:30';
        this.statusString = "active";
        this.callback = function (data) {
            _this.statusList = data;
        };
    }
    UseCarCountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UseCarCountPage');
    };
    UseCarCountPage.prototype.goChooseStatus = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__choose_status_choose_status__["a" /* ChooseStatusPage */], { callback: this.callback });
    };
    UseCarCountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-use-car-count',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\use-car-count\use-car-count.html"*/'<!--\n  Generated template for the UseCarCountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>部门用车统计</ion-title>\n    <ion-buttons end>\n      <button class="button-positive" (click)="query()">查询</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label text-start color="dark">单位:</ion-label>\n      <ion-select [(ngModel)]="org" interface="popover">\n        <ion-option value="public">1</ion-option>\n        <ion-option value="production">2</ion-option>\n        <ion-option value="special">3</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label text-start color="dark">部门:</ion-label>\n      <ion-select [(ngModel)]="dept" interface="popover">\n        <ion-option value="1">1</ion-option>\n        <ion-option value="2">2</ion-option>\n        <ion-option value="3">3</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label text-start color="dark">车辆性质:</ion-label>\n      <ion-select [(ngModel)]="carType" interface="popover">\n        <ion-option value="all">所有性质1</ion-option>\n        <ion-option value="public">公务车</ion-option>\n        <ion-option value="production">生产车</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label color="dark">时间:</ion-label>\n      <ion-datetime displayFormat="YYYY-MM-DD" [(ngModel)]="startDate" placeholder="开始" cancelText=取消 doneText=确定></ion-datetime>\n      <ion-datetime displayFormat="YYYY-MM-DD" [(ngModel)]="endDate" min={{startDate}} placeholder="结束" cancelText=取消 doneText=确定></ion-datetime>\n    </ion-item>\n    <ion-item (click)="goChooseStatus()">\n      <ion-label text-start>订单状态:</ion-label>\n      <ion-label *ngIf="statusList != null" text-end>已选择</ion-label>\n      <ion-label *ngIf="statusList == null" text-end>请选择</ion-label>\n    </ion-item>\n    <ion-item-divider>\n      <ion-label color="primary">汇总信息：</ion-label>\n    </ion-item-divider>\n    <ion-item>\n      <ion-label text-start>总用车单数：</ion-label>\n      <ion-label text-end>-单</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label text-start>总里程数：</ion-label>\n      <ion-label text-end>-公里</ion-label>\n    </ion-item>\n    <ion-item-divider>\n      <ion-label color="primary">用车明细：</ion-label>\n    </ion-item-divider>\n    <div class="table_div">\n      <table class="use_car_table">\n        <tr>\n          <th>单号</th>\n          <th>申请人</th>\n          <th>开始时间</th>\n          <th>状态</th>\n        </tr>\n        <tr ng-repeat="item in views.orderList.list track by $index">\n          <td>{{this.id}}</td>\n          <td>{{this.applicantName}}</td>\n          <td>{{this.startTime | date: \'MM/dd HH:mm\'}}</td>\n          <td>{{this.statusString}}</td>\n        </tr>\n      </table>\n    </div>\n  </ion-list>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\use-car-count\use-car-count.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], UseCarCountPage);
    return UseCarCountPage;
}());

//# sourceMappingURL=use-car-count.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_registration_add_registration__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RecordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecordPage = /** @class */ (function () {
    function RecordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tabsIndex = 0;
    }
    RecordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecordPage');
    };
    RecordPage.prototype.switchTabs = function (index) {
        this.tabsIndex = index;
    };
    RecordPage.prototype.addRegistration = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_registration_add_registration__["a" /* AddRegistrationPage */]);
    };
    RecordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-record',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\record\record.html"*/'<!--\n  Generated template for the RecordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar align-title="center" color="primary">\n    <ion-title>用车登记</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding has-subheader="false" class="content" overflow-scroll="true" delegate-handle="location">\n  <ion-row class="registration-tab">\n    <div class="active col_width" style="border-right:1px solid RGBA(216, 216, 216, 1)"\n         *ngIf="tabsIndex==0"\n          (click)="switchTabs(0)">\n      <p class="col_p">正在进行</p>\n    </div>\n    <div class="col_width" style="border-right:1px solid RGBA(216, 216, 216, 1)"\n         *ngIf="tabsIndex!=0"\n         (click)="switchTabs(0)">\n      <p class="col_p">正在进行</p>\n    </div>\n    <div class="active col_width" (click)="switchTabs(1)" *ngIf="tabsIndex==1">\n      <p class="col_p">历史记录</p>\n    </div>\n    <div class="col_width" (click)="switchTabs(1)" *ngIf="tabsIndex!=1">\n      <p class="col_p">历史记录</p>\n    </div>\n  </ion-row>\n  <ion-item class="btm_div">\n    <button class="button button-block button-positive" (click)="addRegistration()" *ngIf="tabsIndex==0">\n      新增登记\n    </button>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\record\record.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RecordPage);
    return RecordPage;
}());

//# sourceMappingURL=record.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaintainApplyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_maintain_order_add_maintain_order__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MaintainApplyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MaintainApplyPage = /** @class */ (function () {
    function MaintainApplyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tabsIndex = 0;
    }
    MaintainApplyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MaintainApplyPage');
    };
    MaintainApplyPage.prototype.switchTabs = function (index) {
        this.tabsIndex = index;
    };
    MaintainApplyPage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    MaintainApplyPage.prototype.addOrder = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_maintain_order_add_maintain_order__["a" /* AddMaintainOrderPage */]);
    };
    MaintainApplyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-maintain-apply',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\maintain-apply\maintain-apply.html"*/'<!--\n  Generated template for the MaintainApplyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="content_head">\n\n  <ion-row class="head_nav_bar">\n    <ion-segment-button class="nav_back_button" (click)="goback()" item-start="">\n      <ion-icon name="arrow-back"></ion-icon>返回</ion-segment-button>\n    <ion-label align-items-center="" class="header">维保管理</ion-label>\n  </ion-row>\n\n  <div class="col-33 col-offset-33 approvericon_wrap">\n    <img class="approvericon" src="assets/imgs/memberphoto.png" width="70px"/>\n  </div>\n  <div class="header_name">\n    <ion-label class="pname">Name</ion-label>\n    <ion-label class="dept">DEPT</ion-label>\n  </div>\n\n</ion-header>\n\n\n<ion-content padding has-subheader="false" class="content" delegate-handle="location" overflow-scroll="true">\n  <ion-row class="row add_tab">\n    <ion-col class="col"\n             (click)="switchTabs(0)"\n             ng-style="{color:views.tabIndex == 0?\'\':\'#bebebe\'}"\n             *ngIf="this.tabsIndex!=0">\n      <ion-icon class="col_i" name="car"></ion-icon>\n      <ion-label class="col_p">当前维保申请</ion-label>\n    </ion-col>\n    <ion-col class="col active"\n             (click)="switchTabs(0)"\n             ng-style="{color:views.tabIndex == 0?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex==0">\n      <ion-icon class="col_i" name="car"></ion-icon>\n      <ion-label class="col_p">当前维保申请</ion-label>\n    </ion-col>\n    <ion-col class="col"\n             (click)="switchTabs(1)"\n             ng-style="{color:views.tabIndex == 1?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex!=1">\n      <ion-icon class="col_i" name="list-box"></ion-icon>\n      <ion-label class="col_p">已完成</ion-label>\n    </ion-col>\n    <ion-col class="col active"\n             (click)="switchTabs(1)"\n             ng-style="{color:views.tabIndex == 1?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex==1">\n      <ion-icon class="col_i" name="list-box"></ion-icon>\n      <ion-label class="col_p">已完成</ion-label>\n    </ion-col>\n    <ion-col class="col active"\n             (click)="switchTabs(2)"\n             ng-style="{color:views.tabIndex == 1?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex==2">\n      <ion-icon class="col_i" name="star-half"></ion-icon>\n      <ion-label class="col_p">维保评价</ion-label>\n    </ion-col>\n    <ion-col class="col"\n             (click)="switchTabs(2)"\n             ng-style="{color:views.tabIndex == 1?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex!=2">\n      <ion-icon class="col_i" name="star-half"></ion-icon>\n      <ion-label class="col_p">维保评价</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-item class="padding-horizontal btn_div" *ngIf="tabsIndex==0">\n    <button class="button button-block button-positive" (click)="addOrder()">\n      申请维保\n    </button>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\maintain-apply\maintain-apply.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MaintainApplyPage);
    return MaintainApplyPage;
}());

//# sourceMappingURL=maintain-apply.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaintainApprovalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MaintainApprovalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MaintainApprovalPage = /** @class */ (function () {
    function MaintainApprovalPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tabsIndex = 0;
    }
    MaintainApprovalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MaintainApprovalPage');
    };
    MaintainApprovalPage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    MaintainApprovalPage.prototype.switchTabs = function (index) {
        this.tabsIndex = index;
    };
    MaintainApprovalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-maintain-approval',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\maintain-approval\maintain-approval.html"*/'<!--\n  Generated template for the MaintainApprovalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="content_head">\n\n  <ion-row class="head_nav_bar">\n    <ion-segment-button class="nav_back_button" (click)="goback()" item-start="">\n      <ion-icon name="arrow-back"></ion-icon>返回</ion-segment-button>\n    <ion-label align-items-center="" class="header">维保管理</ion-label>\n  </ion-row>\n\n  <div class="col-33 col-offset-33 approvericon_wrap">\n    <img class="approvericon" src="assets/imgs/memberphoto.png" width="70px"/>\n  </div>\n  <div class="header_name">\n    <ion-label class="pname">Name</ion-label>\n    <ion-label class="dept">DEPT</ion-label>\n  </div>\n\n</ion-header>\n\n\n<ion-content padding has-subheader="false" class="content" delegate-handle="location" overflow-scroll="true">\n  <ion-row class="row add_tab">\n    <ion-col class="col"\n             (click)="switchTabs(0)"\n             ng-style="{color:views.tabIndex == 0?\'\':\'#bebebe\'}"\n             *ngIf="this.tabsIndex!=0">\n      <ion-icon class="col_i" name="car"></ion-icon>\n      <ion-label class="col_p">未审批</ion-label>\n    </ion-col>\n    <ion-col class="col active"\n             (click)="switchTabs(0)"\n             ng-style="{color:views.tabIndex == 0?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex==0">\n      <ion-icon class="col_i" name="car"></ion-icon>\n      <ion-label class="col_p">未审批</ion-label>\n    </ion-col>\n    <ion-col class="col"\n             (click)="switchTabs(1)"\n             ng-style="{color:views.tabIndex == 1?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex!=1">\n      <ion-icon class="col_i" name="list-box"></ion-icon>\n      <ion-label class="col_p">已审批</ion-label>\n    </ion-col>\n    <ion-col class="col active"\n             (click)="switchTabs(1)"\n             ng-style="{color:views.tabIndex == 1?\'\':\'#bebebe\'}"\n             *ngIf="tabsIndex==1">\n      <ion-icon class="col_i" name="list-box"></ion-icon>\n      <ion-label class="col_p">已审批</ion-label>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\maintain-approval\maintain-approval.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MaintainApprovalPage);
    return MaintainApprovalPage;
}());

//# sourceMappingURL=maintain-approval.js.map

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		333,
		39
	],
	"../pages/add-maintain-order/add-maintain-order.module": [
		334,
		38
	],
	"../pages/add-registration/add-registration.module": [
		335,
		37
	],
	"../pages/apply-car-consume-log/apply-car-consume-log.module": [
		337,
		36
	],
	"../pages/apply-car-peccancy/apply-car-peccancy.module": [
		336,
		35
	],
	"../pages/apply-info/apply-info.module": [
		338,
		3
	],
	"../pages/apply/apply.module": [
		339,
		34
	],
	"../pages/applydo/applydo.module": [
		340,
		33
	],
	"../pages/approval-order-info/approval-order-info.module": [
		341,
		32
	],
	"../pages/approver-home/approver-home.module": [
		342,
		31
	],
	"../pages/car-back/car-back.module": [
		343,
		2
	],
	"../pages/car-consume-log-order-info/car-consume-log-order-info.module": [
		345,
		1
	],
	"../pages/car-consume-log/car-consume-log.module": [
		344,
		30
	],
	"../pages/car-finish/car-finish.module": [
		346,
		0
	],
	"../pages/car-monitor/car-monitor.module": [
		348,
		29
	],
	"../pages/car-peccancy/car-peccancy.module": [
		347,
		28
	],
	"../pages/choose-car/choose-car.module": [
		349,
		27
	],
	"../pages/choose-dept/choose-dept.module": [
		350,
		26
	],
	"../pages/choose-destination/choose-destination.module": [
		351,
		25
	],
	"../pages/choose-driver/choose-driver.module": [
		352,
		24
	],
	"../pages/choose-maintain-shop/choose-maintain-shop.module": [
		353,
		23
	],
	"../pages/choose-order-comment/choose-order-comment.module": [
		354,
		22
	],
	"../pages/choose-origin/choose-origin.module": [
		355,
		21
	],
	"../pages/choose-status/choose-status.module": [
		356,
		20
	],
	"../pages/comment/comment.module": [
		357,
		19
	],
	"../pages/deal-car-consume-log/deal-car-consume-log.module": [
		358,
		18
	],
	"../pages/deal-car-peccancy/deal-car-peccancy.module": [
		359,
		17
	],
	"../pages/dispatch-home/dispatch-home.module": [
		360,
		16
	],
	"../pages/driver-home/driver-home.module": [
		361,
		15
	],
	"../pages/driver-order-info/driver-order-info.module": [
		362,
		14
	],
	"../pages/forget-password/forget-password.module": [
		363,
		13
	],
	"../pages/login/login.module": [
		364,
		12
	],
	"../pages/maintain-apply/maintain-apply.module": [
		365,
		11
	],
	"../pages/maintain-approval/maintain-approval.module": [
		367,
		10
	],
	"../pages/member/member.module": [
		366,
		9
	],
	"../pages/modify-phone/modify-phone.module": [
		368,
		8
	],
	"../pages/record/record.module": [
		369,
		7
	],
	"../pages/report-table/report-table.module": [
		370,
		6
	],
	"../pages/reset-password/reset-password.module": [
		371,
		5
	],
	"../pages/use-car-count/use-car-count.module": [
		372,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 193;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_SERVE_URL; });
/* unused harmony export REQUEST_TIMEOUT */
/* unused harmony export IS_DEBUG */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ConstantsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ConstantsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var APP_SERVE_URL = 'http://88.128.18.227:8080/cgb/v2/auth/';
var REQUEST_TIMEOUT = 20000; // 请求超时时间,单位为毫秒
var IS_DEBUG = true; // 是否开发(调试)模式
var ConstantsProvider = /** @class */ (function () {
    function ConstantsProvider(http) {
        this.http = http;
        console.log('Hello ConstantsProvider Provider');
    }
    ConstantsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ConstantsProvider);
    return ConstantsProvider;
}());

//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json;charset=UTF-8' })
};
var url = 'http://88.128.18.227:8080/cgb/v2/auth/';
var RestProvider = /** @class */ (function () {
    function RestProvider(http, storage, loadingCtrl, alertCtrl) {
        this.http = http;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.id = 'string';
        this.submitted = false;
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.showLoading = function (content) {
        if (content === void 0) { content = ''; }
        if (this.loading) {
            return;
        }
        var loading = this.loadingCtrl.create({
            content: content
        });
        loading.present();
        this.loading = loading;
    };
    /**
     * 关闭loading
     */
    RestProvider.prototype.hideLoading = function () {
        this.loading && this.loading.dismiss();
        this.loading = null;
    };
    RestProvider.prototype.login = function (user, hashPwd) {
        var _this = this;
        var param = { client_id: "string",
            username: user,
            password: hashPwd };
        this.http.post(url + 'login', param, httpOptions).subscribe(function (res) {
            if (res.code == 1) {
                _this.submitted = true;
                _this.storage.set('token', res.data.token);
                _this.storage.set('user', res.data.user);
                return;
            }
            else if (res.code == 0) {
                var alert_1 = _this.alertCtrl.create({
                    message: '账号或密码错误',
                    buttons: [
                        {
                            text: '关闭',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        }
                    ]
                });
                alert_1.present();
            }
        });
    };
    ;
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ForgetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgetPasswordPage = /** @class */ (function () {
    function ForgetPasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForgetPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgetPasswordPage');
    };
    ForgetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-forget-password',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\forget-password\forget-password.html"*/'<!--\n  Generated template for the ForgetPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar align-title="center" color="primary">\n    <ion-title>忘记密码</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding has-subheader="false" class="content">\n  <ion-card>\n    <ion-card-header class="item item-divider card_title">\n      如需重置密码，请联系管理员\n    </ion-card-header>\n    <ion-list>\n    <ion-label>管理员名字 : 陈航天</ion-label>\n    <ion-label>管理员手机 : 13822222863</ion-label>\n    <ion-label>管理员邮箱 : 13822222863@139.com</ion-label>\n    </ion-list>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\forget-password\forget-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ForgetPasswordPage);
    return ForgetPasswordPage;
}());

//# sourceMappingURL=forget-password.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(262);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_version__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_forget_password_forget_password__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_modify_phone_modify_phone__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_about_about__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_member_member__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_choose_dept_choose_dept__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_reset_password_reset_password__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_report_table_report_table__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_approver_home_approver_home__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_record_record__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_add_registration_add_registration__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_choose_destination_choose_destination__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_choose_origin_choose_origin__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_choose_order_comment_choose_order_comment__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_apply_apply__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_applydo_applydo__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_driver_home_driver_home__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_maintain_apply_maintain_apply__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_add_maintain_order_add_maintain_order__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_choose_car_choose_car__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_choose_maintain_shop_choose_maintain_shop__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_deal_car_peccancy_deal_car_peccancy__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_car_consume_log_car_consume_log__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_apply_car_consume_log_apply_car_consume_log__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_choose_driver_choose_driver__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_dispatch_home_dispatch_home__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_car_peccancy_car_peccancy__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_apply_car_peccancy_apply_car_peccancy__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_deal_car_consume_log_deal_car_consume_log__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_maintain_approval_maintain_approval__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_car_monitor_car_monitor__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_approval_order_info_approval_order_info__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_driver_order_info_driver_order_info__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_comment_comment__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_use_car_count_use_car_count__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_choose_status_choose_status__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__providers_rest_rest__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__providers_storage_storage__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_call_number__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50_ionic2_rating__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__providers_global_data_global_data__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__providers_utils_utils__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__ionic_native_toast__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__ionic_native_network__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__ionic_native_app_minimize__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__providers_constants_constants__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_forget_password_forget_password__["a" /* ForgetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modify_phone_modify_phone__["a" /* ModifyPhonePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_member_member__["a" /* MemberPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_choose_dept_choose_dept__["a" /* ChooseDeptPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_report_table_report_table__["a" /* ReportTablePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_approver_home_approver_home__["a" /* ApproverHomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_record_record__["a" /* RecordPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_add_registration_add_registration__["a" /* AddRegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_choose_destination_choose_destination__["a" /* ChooseDestinationPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_choose_origin_choose_origin__["a" /* ChooseOriginPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_choose_order_comment_choose_order_comment__["a" /* ChooseOrderCommentPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_apply_apply__["a" /* ApplyPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_applydo_applydo__["a" /* ApplydoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_driver_home_driver_home__["a" /* DriverHomePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_maintain_apply_maintain_apply__["a" /* MaintainApplyPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_add_maintain_order_add_maintain_order__["a" /* AddMaintainOrderPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_choose_car_choose_car__["a" /* ChooseCarPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_choose_maintain_shop_choose_maintain_shop__["a" /* ChooseMaintainShopPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_deal_car_peccancy_deal_car_peccancy__["a" /* DealCarPeccancyPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_car_consume_log_car_consume_log__["a" /* CarConsumeLogPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_apply_car_consume_log_apply_car_consume_log__["a" /* ApplyCarConsumeLogPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_choose_driver_choose_driver__["a" /* ChooseDriverPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_dispatch_home_dispatch_home__["a" /* DispatchHomePage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_car_peccancy_car_peccancy__["a" /* CarPeccancyPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_apply_car_peccancy_apply_car_peccancy__["a" /* ApplyCarPeccancyPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_deal_car_consume_log_deal_car_consume_log__["a" /* DealCarConsumeLogPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_maintain_approval_maintain_approval__["a" /* MaintainApprovalPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_car_monitor_car_monitor__["a" /* CarMonitorPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_approval_order_info_approval_order_info__["a" /* ApprovalOrderInfoPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_driver_order_info_driver_order_info__["a" /* DriverOrderInfoPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_comment_comment__["a" /* CommentPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_use_car_count_use_car_count__["a" /* UseCarCountPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_choose_status_choose_status__["a" /* ChooseStatusPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {
                    backButtonText: '返回'
                }, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-maintain-order/add-maintain-order.module#AddMaintainOrderPageModule', name: 'AddMaintainOrderPage', segment: 'add-maintain-order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-registration/add-registration.module#AddRegistrationPageModule', name: 'AddRegistrationPage', segment: 'add-registration', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/apply-car-peccancy/apply-car-peccancy.module#ApplyCarPeccancyPageModule', name: 'ApplyCarPeccancyPage', segment: 'apply-car-peccancy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/apply-car-consume-log/apply-car-consume-log.module#ApplyCarConsumeLogPageModule', name: 'ApplyCarConsumeLogPage', segment: 'apply-car-consume-log', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/apply-info/apply-info.module#ApplyInfoPageModule', name: 'ApplyInfoPage', segment: 'apply-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/apply/apply.module#ApplyPageModule', name: 'ApplyPage', segment: 'apply', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/applydo/applydo.module#ApplydoPageModule', name: 'ApplydoPage', segment: 'applydo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/approval-order-info/approval-order-info.module#ApprovalOrderInfoPageModule', name: 'ApprovalOrderInfoPage', segment: 'approval-order-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/approver-home/approver-home.module#ApproverHomePageModule', name: 'ApproverHomePage', segment: 'approver-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car-back/car-back.module#CarBackPageModule', name: 'CarBackPage', segment: 'car-back', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car-consume-log/car-consume-log.module#CarConsumeLogPageModule', name: 'CarConsumeLogPage', segment: 'car-consume-log', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car-consume-log-order-info/car-consume-log-order-info.module#CarConsumeLogOrderInfoPageModule', name: 'CarConsumeLogOrderInfoPage', segment: 'car-consume-log-order-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car-finish/car-finish.module#CarFinishPageModule', name: 'CarFinishPage', segment: 'car-finish', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car-peccancy/car-peccancy.module#CarPeccancyPageModule', name: 'CarPeccancyPage', segment: 'car-peccancy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car-monitor/car-monitor.module#CarMonitorPageModule', name: 'CarMonitorPage', segment: 'car-monitor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/choose-car/choose-car.module#ChooseCarPageModule', name: 'ChooseCarPage', segment: 'choose-car', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/choose-dept/choose-dept.module#ChooseDeptPageModule', name: 'ChooseDeptPage', segment: 'choose-dept', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/choose-destination/choose-destination.module#ChooseDestinationPageModule', name: 'ChooseDestinationPage', segment: 'choose-destination', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/choose-driver/choose-driver.module#ChooseDriverPageModule', name: 'ChooseDriverPage', segment: 'choose-driver', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/choose-maintain-shop/choose-maintain-shop.module#ChooseMaintainShopPageModule', name: 'ChooseMaintainShopPage', segment: 'choose-maintain-shop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/choose-order-comment/choose-order-comment.module#ChooseOrderCommentPageModule', name: 'ChooseOrderCommentPage', segment: 'choose-order-comment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/choose-origin/choose-origin.module#ChooseOriginPageModule', name: 'ChooseOriginPage', segment: 'choose-origin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/choose-status/choose-status.module#ChooseStatusPageModule', name: 'ChooseStatusPage', segment: 'choose-status', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/comment/comment.module#CommentPageModule', name: 'CommentPage', segment: 'comment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/deal-car-consume-log/deal-car-consume-log.module#DealCarConsumeLogPageModule', name: 'DealCarConsumeLogPage', segment: 'deal-car-consume-log', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/deal-car-peccancy/deal-car-peccancy.module#DealCarPeccancyPageModule', name: 'DealCarPeccancyPage', segment: 'deal-car-peccancy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dispatch-home/dispatch-home.module#DispatchHomePageModule', name: 'DispatchHomePage', segment: 'dispatch-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/driver-home/driver-home.module#DriverHomePageModule', name: 'DriverHomePage', segment: 'driver-home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/driver-order-info/driver-order-info.module#DriverOrderInfoPageModule', name: 'DriverOrderInfoPage', segment: 'driver-order-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forget-password/forget-password.module#ForgetPasswordPageModule', name: 'ForgetPasswordPage', segment: 'forget-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/maintain-apply/maintain-apply.module#MaintainApplyPageModule', name: 'MaintainApplyPage', segment: 'maintain-apply', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/member/member.module#MemberPageModule', name: 'MemberPage', segment: 'member', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/maintain-approval/maintain-approval.module#MaintainApprovalPageModule', name: 'MaintainApprovalPage', segment: 'maintain-approval', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modify-phone/modify-phone.module#ModifyPhonePageModule', name: 'ModifyPhonePage', segment: 'modify-phone', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/record/record.module#RecordPageModule', name: 'RecordPage', segment: 'record', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report-table/report-table.module#ReportTablePageModule', name: 'ReportTablePage', segment: 'report-table', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/use-car-count/use-car-count.module#UseCarCountPageModule', name: 'UseCarCountPage', segment: 'use-car-count', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_46__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_50_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_forget_password_forget_password__["a" /* ForgetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_modify_phone_modify_phone__["a" /* ModifyPhonePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_member_member__["a" /* MemberPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_choose_dept_choose_dept__["a" /* ChooseDeptPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_reset_password_reset_password__["a" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_report_table_report_table__["a" /* ReportTablePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_approver_home_approver_home__["a" /* ApproverHomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_record_record__["a" /* RecordPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_add_registration_add_registration__["a" /* AddRegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_choose_destination_choose_destination__["a" /* ChooseDestinationPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_choose_origin_choose_origin__["a" /* ChooseOriginPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_choose_order_comment_choose_order_comment__["a" /* ChooseOrderCommentPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_apply_apply__["a" /* ApplyPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_applydo_applydo__["a" /* ApplydoPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_driver_home_driver_home__["a" /* DriverHomePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_maintain_apply_maintain_apply__["a" /* MaintainApplyPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_add_maintain_order_add_maintain_order__["a" /* AddMaintainOrderPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_choose_car_choose_car__["a" /* ChooseCarPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_choose_maintain_shop_choose_maintain_shop__["a" /* ChooseMaintainShopPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_deal_car_peccancy_deal_car_peccancy__["a" /* DealCarPeccancyPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_car_consume_log_car_consume_log__["a" /* CarConsumeLogPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_apply_car_consume_log_apply_car_consume_log__["a" /* ApplyCarConsumeLogPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_choose_driver_choose_driver__["a" /* ChooseDriverPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_dispatch_home_dispatch_home__["a" /* DispatchHomePage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_car_peccancy_car_peccancy__["a" /* CarPeccancyPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_apply_car_peccancy_apply_car_peccancy__["a" /* ApplyCarPeccancyPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_deal_car_consume_log_deal_car_consume_log__["a" /* DealCarConsumeLogPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_maintain_approval_maintain_approval__["a" /* MaintainApprovalPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_car_monitor_car_monitor__["a" /* CarMonitorPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_approval_order_info_approval_order_info__["a" /* ApprovalOrderInfoPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_driver_order_info_driver_order_info__["a" /* DriverOrderInfoPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_comment_comment__["a" /* CommentPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_use_car_count_use_car_count__["a" /* UseCarCountPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_choose_status_choose_status__["a" /* ChooseStatusPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_47__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_48__providers_storage_storage__["a" /* StorageProvider */],
                __WEBPACK_IMPORTED_MODULE_49__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_51__providers_global_data_global_data__["a" /* GlobalData */],
                __WEBPACK_IMPORTED_MODULE_52__providers_utils_utils__["a" /* Utils */],
                __WEBPACK_IMPORTED_MODULE_56__providers_constants_constants__["b" /* ConstantsProvider */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_53__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_54__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_55__ionic_native_app_minimize__["a" /* AppMinimize */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage) {
        var _this = this;
        this.storage = storage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        storage.ready().then(function () {
            storage.get('USER_INFO').then(function (value) {
                var isRemember = !!value ? JSON.parse(value).isRemember : false;
                if (isRemember) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
                }
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\choiw\car\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\choiw\car\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StorageProvider = /** @class */ (function () {
    function StorageProvider(http) {
        this.http = http;
        console.log('Hello StorageProvider Provider');
    }
    StorageProvider.prototype.setItem = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };
    StorageProvider.prototype.getItem = function (key) {
        return JSON.parse(localStorage.getItem(key));
    };
    StorageProvider.prototype.removeItem = function (key) {
        localStorage.removeItem(key);
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Utils类存放和业务无关的公共方法
 * @description
 */
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils_1 = Utils;
    Utils.isEmpty = function (value) {
        return value == null || typeof value === 'string' && value.length === 0;
    };
    Utils.isNotEmpty = function (value) {
        return !Utils_1.isEmpty(value);
    };
    /**
     * 格式“是”or“否”
     * @param value
     * @returns {string|string}
     */
    Utils.formatYesOrNo = function (value) {
        return value == 1 ? '是' : (value == '0' ? '否' : null);
    };
    /**
     * 日期对象转为日期字符串
     * @param date 需要格式化的日期对象
     * @param sFormat 输出格式,默认为yyyy-MM-dd                        年：y，月：M，日：d，时：h，分：m，秒：s
     * @example  dateFormat(new Date())                               "2017-02-28"
     * @example  dateFormat(new Date(),'yyyy-MM-dd')                  "2017-02-28"
     * @example  dateFormat(new Date(),'yyyy-MM-dd HH:mm:ss')         "2017-02-28 13:24:00"   ps:HH:24小时制
     * @example  dateFormat(new Date(),'yyyy-MM-dd hh:mm:ss')         "2017-02-28 01:24:00"   ps:hh:12小时制
     * @example  dateFormat(new Date(),'hh:mm')                       "09:24"
     * @example  dateFormat(new Date(),'yyyy-MM-ddTHH:mm:ss+08:00')   "2017-02-28T13:24:00+08:00"
     * @example  dateFormat(new Date('2017-02-28 13:24:00'),'yyyy-MM-ddTHH:mm:ss+08:00')   "2017-02-28T13:24:00+08:00"
     * @returns {string}
     */
    Utils.dateFormat = function (date, sFormat) {
        if (sFormat === void 0) { sFormat = 'yyyy-MM-dd'; }
        var time = {
            Year: 0,
            TYear: '0',
            Month: 0,
            TMonth: '0',
            Day: 0,
            TDay: '0',
            Hour: 0,
            THour: '0',
            hour: 0,
            Thour: '0',
            Minute: 0,
            TMinute: '0',
            Second: 0,
            TSecond: '0',
            Millisecond: 0
        };
        time.Year = date.getFullYear();
        time.TYear = String(time.Year).substr(2);
        time.Month = date.getMonth() + 1;
        time.TMonth = time.Month < 10 ? '0' + time.Month : String(time.Month);
        time.Day = date.getDate();
        time.TDay = time.Day < 10 ? '0' + time.Day : String(time.Day);
        time.Hour = date.getHours();
        time.THour = time.Hour < 10 ? '0' + time.Hour : String(time.Hour);
        time.hour = time.Hour < 13 ? time.Hour : time.Hour - 12;
        time.Thour = time.hour < 10 ? '0' + time.hour : String(time.hour);
        time.Minute = date.getMinutes();
        time.TMinute = time.Minute < 10 ? '0' + time.Minute : String(time.Minute);
        time.Second = date.getSeconds();
        time.TSecond = time.Second < 10 ? '0' + time.Second : String(time.Second);
        time.Millisecond = date.getMilliseconds();
        return sFormat.replace(/yyyy/ig, String(time.Year))
            .replace(/yyy/ig, String(time.Year))
            .replace(/yy/ig, time.TYear)
            .replace(/y/ig, time.TYear)
            .replace(/MM/g, time.TMonth)
            .replace(/M/g, String(time.Month))
            .replace(/dd/ig, time.TDay)
            .replace(/d/ig, String(time.Day))
            .replace(/HH/g, time.THour)
            .replace(/H/g, String(time.Hour))
            .replace(/hh/g, time.Thour)
            .replace(/h/g, String(time.hour))
            .replace(/mm/g, time.TMinute)
            .replace(/m/g, String(time.Minute))
            .replace(/ss/ig, time.TSecond)
            .replace(/s/ig, String(time.Second))
            .replace(/fff/ig, String(time.Millisecond));
    };
    /**
     * 返回字符串长度，中文计数为2
     * @param str
     * @returns {number}
     */
    Utils.strLength = function (str) {
        var len = 0;
        for (var i = 0, length_1 = str.length; i < length_1; i++) {
            str.charCodeAt(i) > 255 ? len += 2 : len++;
        }
        return len;
    };
    /**
     * 把url中的双斜杠替换为单斜杠
     * 如:http://localhost:8080//api//demo.替换后http://localhost:8080/api/demo
     * @param url
     * @returns {string}
     */
    Utils.formatUrl = function (url) {
        if (url === void 0) { url = ''; }
        var index = 0;
        if (url.startsWith('http')) {
            index = 7;
        }
        return url.substring(0, index) + url.substring(index).replace(/\/\/*/g, '/');
    };
    Utils.sessionStorageGetItem = function (key) {
        var jsonString = sessionStorage.getItem(key);
        if (jsonString) {
            return JSON.parse(jsonString);
        }
        return null;
    };
    Utils.sessionStorageSetItem = function (key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    };
    Utils.sessionStorageRemoveItem = function (key) {
        sessionStorage.removeItem(key);
    };
    Utils.sessionStorageClear = function () {
        sessionStorage.clear();
    };
    /**
     * 字符串加密
     * @param str
     * @returns {any}
     */
    Utils.hex_md5 = function (str) {
        return hex_md5(str);
    };
    /** 产生一个随机的32位长度字符串 */
    Utils.uuid = function () {
        var text = '';
        var possible = 'abcdef0123456789';
        for (var i = 0; i < 19; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text + new Date().getTime();
    };
    /**
     * 每次调用sequence加1
     * @type {()=>number}
     */
    Utils.getSequence = (function () {
        var sequence = 1;
        return function () {
            return ++sequence;
        };
    })();
    Utils = Utils_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], Utils);
    return Utils;
    var Utils_1;
}());

//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GlobalData = /** @class */ (function () {
    function GlobalData() {
        // 设置http请求是否显示loading,注意:设置为true,接下来的请求会不显示loading,请求执行完成会自动设置为false
        this._showLoading = true;
        // 是否启用文件缓存
        this._enabledFileCache = true;
    }
    GlobalData.prototype.get_userId = function () {
        return this._userId;
    };
    GlobalData.prototype.set_userId = function (value) {
        this._userId = value;
    };
    GlobalData.prototype.get_username = function () {
        return this._username;
    };
    GlobalData.prototype.set_username = function (value) {
        this._username = value;
    };
    GlobalData.prototype.get_user = function () {
        return this._user;
    };
    GlobalData.prototype.set_user = function (value) {
        this._user = value;
    };
    GlobalData.prototype.get_token = function () {
        return this._token;
    };
    GlobalData.prototype.set_token = function (value) {
        this._token = value;
    };
    GlobalData.prototype.get_showLoading = function () {
        return this._showLoading;
    };
    GlobalData.prototype.set_showLoading = function (value) {
        this._showLoading = value;
    };
    Object.defineProperty(GlobalData.prototype, "enabledFileCache", {
        get: function () {
            return this._enabledFileCache;
        },
        set: function (value) {
            this._enabledFileCache = value;
        },
        enumerable: true,
        configurable: true
    });
    GlobalData = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], GlobalData);
    return GlobalData;
}());

//# sourceMappingURL=global-data.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseCarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChooseCarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChooseCarPage = /** @class */ (function () {
    function ChooseCarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platenumber = null;
        this.cartype = null;
        this.platenumber = 'AAA123';
        this.cartype = '123';
    }
    ChooseCarPage.prototype.selectAll = function (event) { event.inputElement.select(); };
    ChooseCarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChooseCarPage');
    };
    ChooseCarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-choose-car',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\choose-car\choose-car.html"*/'<!--\n  Generated template for the ChooseCarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar align-title="center" color="primary">\n    <ion-title>选择车辆</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding has-subheader="false" class="content">\n  <ion-list>\n    <ion-searchbar placeholder="搜索车牌号" cancelButtonText="取消" [showCancelButton]="true" (ionFocus)="selectAll($event)" class="search_list">\n\n    </ion-searchbar>\n    <table class="driver_table">\n      <tr class="table_tr">\n        <th class="table_th">车牌号</th>\n        <th class="table_th">车辆类型</th>\n      </tr>\n      <tr class="table_tr" ng-repeat="item in views.taskPage[0].rows | filter:{cardNumber:views.searchName}"\n          ng-click=\'chooseCar(item)\'>\n        <td class="table_th">{{this.platenumber}}</td>\n        <td class="table_th">{{this.cartype}}</td>\n      </tr>\n\n    </table>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\choose-car\choose-car.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ChooseCarPage);
    return ChooseCarPage;
}());

//# sourceMappingURL=choose-car.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\about\about.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar align-title="center" color="primary">\n    <ion-title>关于我们</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content paddinghas-subheader="false" class="ion-content" overflow-scroll="true" >\n  <p class="p_content">版本号 1.0</p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseDestinationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChooseDestinationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChooseDestinationPage = /** @class */ (function () {
    function ChooseDestinationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.addressList = null;
        this.dest = this.navParams.get("dest");
    }
    ChooseDestinationPage.prototype.ionViewWillEnter = function () {
        this.placeAutocomplete();
    };
    ChooseDestinationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChooseDestinationPage');
    };
    ChooseDestinationPage.prototype.confirmClick = function () {
        var that = this;
        that.destAddress = that.value;
        AMap.plugin('AMap.Autocomplete', function () {
            var originAutoOptions = {
                city: "广州",
                citylimit: true
            };
            var originAuto = new AMap.Autocomplete(originAutoOptions);
            originAuto.search(that.destAddress, function (status, result) {
                that.addressList = result.tips;
            });
        });
        return;
    };
    ChooseDestinationPage.prototype.selectItem = function (item) {
        var _this = this;
        this.navCtrl.pop().then(function () {
            _this.navParams.get("dest")(item.name);
        });
    };
    ChooseDestinationPage.prototype.placeAutocomplete = function () {
        var that = this;
        AMap.plugin('AMap.Autocomplete', function () {
            var originAutoOptions = {
                city: "广州",
                citylimit: true
            };
            var originAuto = new AMap.Autocomplete(originAutoOptions);
            originAuto.search("供电局", function (status, result) {
                that.addressList = result.tips;
            });
        });
    };
    ChooseDestinationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-choose-destination',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\choose-destination\choose-destination.html"*/'<!--\n  Generated template for the ChooseDestinationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar align-title="center" color="primary">\n    <ion-title>地址</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row>\n    <ion-row class="searchbar_size">\n      <ion-searchbar [(ngModel)]="this.value" id="origin" placeholder="输入地址">\n      </ion-searchbar>\n    </ion-row>\n    <button class="button" (click)="confirmClick()">确认</button>\n  </ion-row>\n  <ion-list text-wrap>\n    <ion-item *ngFor="let place of this.addressList" (click)="selectItem(place)">\n      {{place.name}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\choose-destination\choose-destination.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ChooseDestinationPage);
    return ChooseDestinationPage;
}());

//# sourceMappingURL=choose-destination.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseOriginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChooseOriginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChooseOriginPage = /** @class */ (function () {
    function ChooseOriginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.addressList = null;
        this.index = 0;
        this.item = this.navParams.get("item");
    }
    ChooseOriginPage.prototype.ionViewWillEnter = function () {
        this.placeAutocomplete();
    };
    ChooseOriginPage.prototype.ionViewDidEnter = function () {
        console.log("ionViewDidEnter");
    };
    ChooseOriginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChooseOriginPage');
    };
    ChooseOriginPage.prototype.confirmClick = function () {
        var that = this;
        that.originAddress = that.value;
        AMap.plugin('AMap.Autocomplete', function () {
            var originAutoOptions = {
                city: "广州",
                citylimit: true
            };
            var originAuto = new AMap.Autocomplete(originAutoOptions);
            originAuto.search(that.originAddress, function (status, result) {
                that.addressList = result.tips;
            });
        });
        return;
    };
    ChooseOriginPage.prototype.selectItem = function (item) {
        var _this = this;
        this.navCtrl.pop().then(function () {
            _this.navParams.get("item")(item.name);
        });
    };
    ChooseOriginPage.prototype.placeAutocomplete = function () {
        var that = this;
        AMap.plugin('AMap.Autocomplete', function () {
            var originAutoOptions = {
                city: "广州",
                citylimit: true
            };
            var originAuto = new AMap.Autocomplete(originAutoOptions);
            originAuto.search("供电局", function (status, result) {
                that.addressList = result.tips;
            });
        });
    };
    ChooseOriginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-choose-origin',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\choose-origin\choose-origin.html"*/'<!--\n  Generated template for the ChooseOriginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar align-title="center" color="primary">\n    <ion-title>地址</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row>\n    <ion-row class="searchbar_size">\n      <ion-searchbar [(ngModel)]="this.value" id="origin" placeholder="输入地址">\n      </ion-searchbar>\n    </ion-row>\n    <button class="button" (click)="confirmClick()">确认</button>\n  </ion-row>\n  <ion-list text-wrap>\n    <ion-item *ngFor="let place of this.addressList" (click)="selectItem(place)">\n      {{place.name}}\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\choose-origin\choose-origin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ChooseOriginPage);
    return ChooseOriginPage;
}());

//# sourceMappingURL=choose-origin.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseOrderCommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ChooseOrderCommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChooseOrderCommentPage = /** @class */ (function () {
    function ChooseOrderCommentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = "qwe";
        this.nullString = null;
        this.firstParam = null;
        this.registration = "registration";
        this.getRegistrationReasons();
        this.getReasons();
        this.firstParam = this.navParams.get("firstPassed");
        this.reasonsForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            "reasons": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]({ value: 'reason', disabled: false })
        });
        this.callback = this.navParams.get("callback");
    }
    ChooseOrderCommentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChooseOrderCommentPage');
    };
    ChooseOrderCommentPage.prototype.getRegistrationReasons = function () {
        this.registrationReasons = [
            { description: '停机操作、工作许可', id: 1, },
            { description: '日常维护', id: 2, },
            { description: '月度维护检查', id: 3, },
            { description: '信号故障异常、事故处理', id: 4, },
            { description: '领取物资', id: 5, },
            { description: '参加会议', id: 6, },
            { description: '洗车、加油', id: 7, },
            { description: '应急值班', id: 8, },
            { description: '其他', id: 9, },
        ];
    };
    ChooseOrderCommentPage.prototype.getReasons = function () {
        this.reasons = [
            { description: '超过22公里的公务出行', id: 11, },
            { description: '参加局统一组织召开的公务活动达到4人及以上共同前往', id: 12, },
            { description: '局层面（局领导参加）的日常公（商）务接待活动', id: 13, },
            { description: '在应急救灾、生产抢修抢险、应急、抢险、救灾、防汛、处理突发事件中的公务活动', id: 14, },
            { description: '机要保密文件，涉密人事、外事文件传递；现金、重要票据存取；监督执纪等用车', id: 15, },
            { description: '有时限要求的公务出行', id: 16, },
            { description: '退休人员参加局统一组织的集体活动或社会团体组织的重要活动', id: 17, },
            { description: '员工上班期间身体突发不适或急重症需要到医院就诊', id: 18, },
            { description: '由局层面统一组织因公外出3人以上需要集中接送机场、火车站', id: 19, },
            { description: '参加各级党委、人大、政府、政协等单位组织召开的各类会议、调研', id: 20, },
            { description: '经办公室批准的其它特殊情况下，公共交通工具难以按时保障到达目的地等方面的公务用车需求', id: 21, },
            { description: '其他', id: 22, },
        ];
    };
    ChooseOrderCommentPage.prototype.logForm = function (form) {
        alert(form.value);
    };
    ChooseOrderCommentPage.prototype.select = function (reason) {
        this.log = reason.description;
    };
    ChooseOrderCommentPage.prototype.doSubmit = function (event) {
        var _this = this;
        this.navCtrl.pop().then(function () {
            _this.navParams.get("callback")(_this.log);
        });
    };
    ChooseOrderCommentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-choose-order-comment',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\choose-order-comment\choose-order-comment.html"*/'<!--\n  Generated template for the ChooseOrderCommentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar align-title="center" color="primary">\n    <ion-title>用车事由</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding has-subheader="false" class="content">\n  <form (ngSubmit)="logForm(form)">\n    <ion-list radio-group name="radio" [(ngModel)]="reasonChecked" *ngIf="firstParam==registration">\n      <ion-item *ngFor="let reason of registrationReasons" >\n        <ion-label (click)="doSubmit(event)">{{reason.description}}</ion-label>\n        <ion-radio (ionSelect)="select(reason)" [value]="reason" (click)="doSubmit(event)"></ion-radio>\n      </ion-item>\n  </ion-list>\n  </form>\n\n  <form (ngSubmit)="logForm(form)">\n    <ion-list radio-group name="radio" [(ngModel)]="reasonChecked" *ngIf="!firstParam">\n      <ion-item text-wrap *ngFor="let reason of reasons" >\n        <ion-label (click)="doSubmit(event)">{{reason.description}}</ion-label>\n        <ion-radio (ionSelect)="select(reason)" [value]="reason" (click)="doSubmit(event)"></ion-radio>\n      </ion-item>\n    </ion-list>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\choose-order-comment\choose-order-comment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ChooseOrderCommentPage);
    return ChooseOrderCommentPage;
}());

//# sourceMappingURL=choose-order-comment.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseDriverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChooseDriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChooseDriverPage = /** @class */ (function () {
    function ChooseDriverPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.name = "123";
        this.year = "1";
        this.rating = 4.7;
    }
    ChooseDriverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChooseDriverPage');
    };
    ChooseDriverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-choose-driver',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\choose-driver\choose-driver.html"*/'<!--\n  Generated template for the ChooseDriverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar align-title="center" color="primary">\n    <ion-title>选择司机</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-searchbar placeholder="搜索司机" cancelButtonText="取消" [showCancelButton]="true" (ionFocus)="selectAll($event)" class="search_list">\n\n    </ion-searchbar>\n    <table class="driver_table">\n      <tr class="table_tr">\n        <th class="table_th">姓名</th>\n        <th class="table_th">驾龄</th>\n        <th class="table_th">评分</th>\n      </tr>\n      <tr class="table_tr" ng-repeat="item in views.taskPage[0].rows | filter:{cardNumber:views.searchName}"\n          ng-click=\'chooseCar(item)\'>\n        <td class="table_th">{{this.name}}</td>\n        <td class="table_th">{{this.year}}</td>\n        <td class="table_th">{{this.rating}}</td>\n      </tr>\n\n    </table>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\choose-driver\choose-driver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ChooseDriverPage);
    return ChooseDriverPage;
}());

//# sourceMappingURL=choose-driver.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ts_md5__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ts_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ts_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_data_global_data__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_constants_constants__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_rest_rest__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_common_http__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json;charset=UTF-8' })
};
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, storage, http, restProvider, alertCtrl, loadingCtrl, globalData) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.http = http;
        this.restProvider = restProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.globalData = globalData;
        this.isRemember = false;
        this.isShow = false;
        this.submitted = false;
        this.loginCheck = false;
        this.url = __WEBPACK_IMPORTED_MODULE_6__providers_constants_constants__["a" /* APP_SERVE_URL */];
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.showLoading = function (content) {
        if (content === void 0) { content = ''; }
        if (this.loading) {
            return;
        }
        var loading = this.loadingCtrl.create({
            content: content
        });
        loading.present();
        this.loading = loading;
    };
    /**
     * 关闭loading
     */
    LoginPage.prototype.hideLoading = function () {
        this.loading && this.loading.dismiss();
        this.loading = null;
    };
    LoginPage.prototype.rememberPassword = function (username, password) {
        this.isRemember = true;
        window.localStorage.setItem('isRemember', JSON.stringify(true));
        var pwd = password.toString();
        var hashPwd = __WEBPACK_IMPORTED_MODULE_4_ts_md5__["Md5"].hashStr(pwd);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.logInFail = function (message) {
        var alert = this.alertCtrl.create({
            message: message.toString(),
            buttons: [
                {
                    text: '关闭',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    LoginPage.prototype.logIn = function (username, password) {
        var _this = this;
        if (username.value.length == 0) {
            this.logInFail('请输入用户名');
            return;
        }
        else if (password.value.length == 0) {
            this.logInFail('请输入密码');
            return;
        }
        this.submitted = true;
        var pwd = password.value.toString();
        var hashPwd = __WEBPACK_IMPORTED_MODULE_4_ts_md5__["Md5"].hashStr(pwd);
        var name = username.value.toString();
        var param = { client_id: "string",
            username: name,
            password: hashPwd };
        this.showLoading();
        this.http.post(this.url + 'login', param, httpOptions).subscribe(function (res) {
            _this.hideLoading();
            if (res.code == 1) {
                _this.submitted = true;
                _this.globalData.set_user(res.data.user);
                _this.globalData.set_userId(res.data.user.id);
                _this.globalData.set_username(res.data.user.name);
                _this.globalData.set_token(res.data.token);
                _this.storage.remove('token');
                _this.storage.remove('user');
                _this.storage.set('token', res.data.token);
                _this.storage.set('user', JSON.stringify(res.data.user));
                if (_this.isRemember == true) {
                    var data = { isRemember: _this.isRemember };
                    _this.storage.remove("USER_INFO");
                    _this.storage.remove('loginname');
                    _this.storage.remove('loginpwd');
                    _this.storage.set("USER_INFO", JSON.stringify(data));
                    _this.storage.set('loginname', name);
                    _this.storage.set('loginpwd', pwd);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                    return;
                }
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                return;
            }
            else if (res.code == 0) {
                var alert_1 = _this.alertCtrl.create({
                    message: '账号或密码错误',
                    buttons: [
                        {
                            text: '关闭',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        }
                    ]
                });
                alert_1.present();
            }
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n\n<ion-content padding class="login_page_content">\n    <div class="row">\n      <div class="col col-33 col-offset-33 loginicon_wrap">\n        <img class="loginicon" src="assets/imgs/memberphoto.png" width="70px"/>\n      </div>\n    </div>\n    <ion-list class="login_page_list" style="margin-top: 20px;">\n      <ion-item item-start>\n        <ion-icon item-start name="person" color="primary" class="smaller_icon"></ion-icon>\n        <ion-input type="text" clearInput placeholder="请输入您的账户" #username>\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-icon item-start name="lock" color="primary" class="smaller_icon"></ion-icon>\n        <ion-input [type]="isShow ? \'text\':\'password\'" clearInput placeholder="请输入您的密码" #password></ion-input>\n      </ion-item>\n\n      <ion-item no-lines>\n        <ion-label>\n          <ion-icon [ios]="isShow ? \'ios-eye\' : \'ios-eye-off\'" [md]="isShow ? \'md-eye\' : \'md-eye-off\'"></ion-icon>\n        显示密码</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="isShow"></ion-toggle>\n      </ion-item>\n\n      <ion-item no-lines>\n        <ion-label>记住密码</ion-label>\n        <ion-toggle checked="false" [(ngModel)]="isRemember"></ion-toggle>\n      </ion-item>\n\n      <ion-item>\n      <button class="button button-block button-positive"  full (click)="logIn(username,password)">\n        登录\n      </button>\n      </ion-item>\n    </ion-list>\n      <ion-item class="login_page_forget_psw">\n      <a (click)="goForgetPwd()">忘记密码?</a>\n      </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_8__node_modules_angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_7__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_5__providers_global_data_global_data__["a" /* GlobalData */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dispatch_home_dispatch_home__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__approver_home_approver_home__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__member_member__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__report_table_report_table__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__record_record__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__apply_apply__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__driver_home_driver_home__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__maintain_apply_maintain_apply__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__deal_car_peccancy_deal_car_peccancy__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__car_consume_log_car_consume_log__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__car_peccancy_car_peccancy__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__deal_car_consume_log_deal_car_consume_log__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__maintain_approval_maintain_approval__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__car_monitor_car_monitor__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_global_data_global_data__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, storage, globalData) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.globalData = globalData;
        this.resources = [];
        this.showReportIcon = false;
        this.showApproveIcon = false;
        this.showSpecialDuty = false;
        this.showMaintainIcon = false;
        this.storage.get('user').then(function (data) {
            _this.globalData.set_user(JSON.parse(data));
            _this.name = _this.globalData.get_user().name;
            _this.dept = _this.globalData.get_user().deptName;
            _this.resources = _this.globalData.get_user().resources;
        });
    }
    HomePage.prototype.getStoredData = function () {
        if (this.resources) {
            for (var resourcesKey in this.resources) {
                if (resourcesKey == "ordersView" || resourcesKey == "dutyLogView" || resourcesKey == "syslogView" ||
                    resourcesKey == "useFuelView" || resourcesKey == "unitollLogView" || resourcesKey == "fuelDetailView") {
                    this.showReportIcon = true;
                }
                else if (resourcesKey == "Approve") {
                    this.showApproveIcon = true;
                }
                else if (resourcesKey == "CarManager") {
                    this.showSpecialDuty = true;
                }
            }
        }
    };
    HomePage.prototype.ab = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */]);
    };
    HomePage.prototype.goPassenger = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__apply_apply__["a" /* ApplyPage */]);
    };
    HomePage.prototype.goMember = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__member_member__["a" /* MemberPage */]);
    };
    HomePage.prototype.goReport = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__report_table_report_table__["a" /* ReportTablePage */]);
    };
    HomePage.prototype.goApproverHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__approver_home_approver_home__["a" /* ApproverHomePage */]);
    };
    HomePage.prototype.goRegistration = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__record_record__["a" /* RecordPage */]);
    };
    HomePage.prototype.goDriver = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__driver_home_driver_home__["a" /* DriverHomePage */]);
    };
    HomePage.prototype.goMaintainApply = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__maintain_apply_maintain_apply__["a" /* MaintainApplyPage */]);
    };
    HomePage.prototype.dealCarPeccancy = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__deal_car_peccancy_deal_car_peccancy__["a" /* DealCarPeccancyPage */]);
    };
    HomePage.prototype.goCarConsumeLog = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__car_consume_log_car_consume_log__["a" /* CarConsumeLogPage */]);
    };
    HomePage.prototype.goDispatcher = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dispatch_home_dispatch_home__["a" /* DispatchHomePage */]);
    };
    HomePage.prototype.goCarPeccancy = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__car_peccancy_car_peccancy__["a" /* CarPeccancyPage */]);
    };
    HomePage.prototype.dealCarConsumeLog = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__deal_car_consume_log_deal_car_consume_log__["a" /* DealCarConsumeLogPage */]);
    };
    HomePage.prototype.goMaintainApproval = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__maintain_approval_maintain_approval__["a" /* MaintainApprovalPage */]);
    };
    HomePage.prototype.goCarLocation = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_16__car_monitor_car_monitor__["a" /* CarMonitorPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\home\home.html"*/'<ion-header class="content_head">\n  <h2 class="header">车辆管理移动应用</h2>\n  <div class="col col-33 col-offset-33 loginicon_wrap">\n    <img class="loginicon" src="assets/imgs/memberphoto.png" width="70px"/>\n  </div>\n  <ion-list class="head_name">\n    <ion-label class="pname">{{this.name}}</ion-label>\n    <ion-label class="dept">{{this.dept}}</ion-label>\n  </ion-list>\n  <ion-buttons end>\n    <button ion-button class="signIn" (click)="signClick()" item-end></button>\n  </ion-buttons>\n</ion-header>\n\n<ion-content padding has-subheader="false" class="content">\n  <ion-label text-center class="menu_tit">--常用功能--</ion-label>\n  <ion-grid text-wrap>\n    <ion-row class="ul">\n      <ion-col col-4 class="li" (click)="goPassenger()">\n        <img class="box_img" src="../assets/imgs/icon2.png"/>\n        <ion-label class="text">用车申请</ion-label>\n      </ion-col>\n      <ion-col col-4 class="li" (click)="goApproverHome()">\n        <img class="box_img" src="../assets/imgs/icon6.png"/>\n        <ion-label class="text">用车审批</ion-label>\n      </ion-col>\n      <ion-col col-4 class="li" (click)="goReport()">\n        <img class="box_img" src="../assets/imgs/icon4.png"/>\n        <ion-label class="text">报表</ion-label>\n      </ion-col>\n      <ion-col col-4 class="li" (click)="goDriver()">\n        <img class="box_img" src="../assets/imgs/icon7.png"/>\n        <ion-label class="text">任务工单</ion-label>\n      </ion-col>\n      <ion-col col- class="li" (click)="goMaintainApply()">\n        <img class="box_img" src="../assets/imgs/carMaintain.png"/>\n        <ion-label class="text">维保申请</ion-label>\n      </ion-col>\n      <ion-col col-4 class="li" (click)="dealCarPeccancy()">\n        <img class="box_img" src="../assets/imgs/dealPeccancy.png"/>\n        <ion-label class="text">违章处理</ion-label>\n      </ion-col>\n      <ion-col col-4 class="li" (click)="goCarConsumeLog()">\n        <img class="box_img" src="../assets/imgs/refuelingRecord.png"/>\n        <ion-label text-wrap class="text">洗车加油记录</ion-label>\n      </ion-col>\n      <ion-col col-4 class="li" (click)="goDispatcher()">\n        <img class="box_img" src="../assets/imgs/icon3.png"/>\n        <ion-label class="text">车辆调度</ion-label>\n      </ion-col>\n      <ion-col col-4 class="li" (click)="goCarPeccancy()">\n        <img class="box_img" src="../assets/imgs/carPeccancy.png"/>\n        <ion-label class="text">车辆违章</ion-label>\n      </ion-col>\n      <ion-col col-4 class="li" (click)="dealCarConsumeLog()">\n        <img class="box_img" src="../assets/imgs/approveRefueling.png"/>\n        <ion-label class="text">洗车加油审批</ion-label>\n      </ion-col>\n      <ion-col col-4 class="li" (click)="goMaintainApproval()">\n        <img class="box_img" src="../assets/imgs/approveMaintain.png"/>\n        <ion-label class="text">维保审批</ion-label>\n      </ion-col>\n      <ion-col col-4 class="li" (click)="goCarLocation()">\n        <img class="box_img" src="../assets/imgs/icon5.png"/>\n        <ion-label class="text">车辆监控</ion-label>\n      </ion-col>\n      <ion-col col-4 class="li" (click)="goRegistration()">\n        <img class="box_img" src="../assets/imgs/icon8.png"/>\n        <ion-label class="text">用车登记</ion-label>\n      </ion-col>\n      <ion-col col-4 class="li" (click)="goMember()">\n        <img class="box_img" src="../assets/imgs/icon1.png"/>\n        <ion-label class="text">个人中心</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-list>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_17__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_18__providers_global_data_global_data__["a" /* GlobalData */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[242]);
//# sourceMappingURL=main.js.map