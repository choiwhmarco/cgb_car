webpackJsonp([3],{

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyInfoPageModule", function() { return ApplyInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apply_info__ = __webpack_require__(373);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ApplyInfoPageModule = /** @class */ (function () {
    function ApplyInfoPageModule() {
    }
    ApplyInfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__apply_info__["a" /* ApplyInfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__apply_info__["a" /* ApplyInfoPage */]),
            ],
        })
    ], ApplyInfoPageModule);
    return ApplyInfoPageModule;
}());

//# sourceMappingURL=apply-info.module.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplyInfoPage; });
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
 * Generated class for the ApplyInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApplyInfoPage = /** @class */ (function () {
    function ApplyInfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ApplyInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ApplyInfoPage');
    };
    ApplyInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-apply-info',template:/*ion-inline-start:"C:\Users\choiw\car\src\pages\apply-info\apply-info.html"*/'<!--\n  Generated template for the ApplyInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>查看信息</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item-divider>\n    <ion-label>申请信息：</ion-label>\n  </ion-item-divider>\n  <ion-item>\n    <ion-label text-start>用车部门</ion-label>\n    <ion-label text-end>{{this.dept}}</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label text-start>申&ensp;请&ensp;人</ion-label>\n    <ion-label text-end>{{this.userName}}</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label text-start>乘车人数</ion-label>\n    <ion-label text-end>{{this.passengerCount}}</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label text-start>乘车人数</ion-label>\n    <ion-label text-end>{{this.passengerCount}}</ion-label>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\Users\choiw\car\src\pages\apply-info\apply-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ApplyInfoPage);
    return ApplyInfoPage;
}());

//# sourceMappingURL=apply-info.js.map

/***/ })

});
//# sourceMappingURL=3.js.map