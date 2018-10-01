import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddRegistrationPage } from "../add-registration/add-registration";

declare var AMap;
/**
 * Generated class for the ChooseOriginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choose-origin',
  templateUrl: 'choose-origin.html',
})
export class ChooseOriginPage {
  value: any;
  myInput: any;
  originAddress: any;
  choice: any;
  addressList = null;
  index: number = 0;
  private item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get("item");
  }

  ionViewWillEnter(){
    this.placeAutocomplete();
  }

  ionViewDidEnter(){
    console.log("ionViewDidEnter");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseOriginPage');
  }

  confirmClick(){
    const that = this;
    that.originAddress = that.value;
    AMap.plugin('AMap.Autocomplete', function () {
      var originAutoOptions = {
        city: "广州",
        citylimit: true
      };
      var originAuto = new AMap.Autocomplete(originAutoOptions);
      originAuto.search(that.originAddress, function (status, result)  {
        that.addressList = result.tips;
      });
    });
    return;
  }

  selectItem(item) {
    this.navCtrl.pop().then(() => {
      this.navParams.get("item")(item.name);
    });
  }




  placeAutocomplete(){
    const that = this;
    AMap.plugin('AMap.Autocomplete', function () {
      var originAutoOptions = {
        city: "广州",
        citylimit: true
      };
      var originAuto = new AMap.Autocomplete(originAutoOptions);
      originAuto.search("供电局", function (status, result)  {
        that.addressList = result.tips;
      });
    });
  }


}


