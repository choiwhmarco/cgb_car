webpackJsonp([2],{

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarBackPageModule", function() { return CarBackPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__car_back__ = __webpack_require__(368);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CarBackPageModule = /** @class */ (function () {
    function CarBackPageModule() {
    }
    CarBackPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__car_back__["a" /* CarBackPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__car_back__["a" /* CarBackPage */]),
            ],
        })
    ], CarBackPageModule);
    return CarBackPageModule;
}());

//# sourceMappingURL=car-back.module.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarBackPage; });
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
 * Generated class for the CarBackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CarBackPage = /** @class */ (function () {
    function CarBackPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CarBackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CarBackPage');
    };
    CarBackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-car-back',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\car-back\car-back.html"*/'<!--\n  Generated template for the CarBackPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>车辆回场</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-divider>\n      <ion-label>正式出车：</ion-label>\n    </ion-item-divider>\n    <ion-item>\n      <ion-label text-start>上次回场里程数：</ion-label>\n      <ion-label text-end>{{this.latestMileage}}公里</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label text-start>实际出场里程：</ion-label>\n      <ion-label text-end>{{this.realMileage}}公里</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label text-start>出车时间</ion-label>\n      <ion-label text-end>{{this.taskStartTime}}</ion-label>\n    </ion-item>\n    <ion-item-divider>\n      <ion-label>车辆回场：</ion-label>\n    </ion-item-divider>\n    <ion-item>\n      <ion-label text-start>车辆回场里程:</ion-label>\n      <ion-input type="text" placeholder="请输入公里数" text-end></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label text-start>本次累计出车里程：</ion-label>\n      <ion-label text-end>{{this.taskMileage}}公里</ion-label>\n    </ion-item>\n  </ion-list>\n  <button class="button button-block button-positive" full (click)="return()">\n    车辆回场\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\car-back\car-back.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CarBackPage);
    return CarBackPage;
}());

//# sourceMappingURL=car-back.js.map

/***/ })

});
//# sourceMappingURL=2.js.map