import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

declare var AMap;
/**
 * Generated class for the ChooseDestinationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choose-destination',
  templateUrl: 'choose-destination.html',
})
export class ChooseDestinationPage {
  dest: any;
  destAddress: any;
  value: any;
  addressList = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dest = this.navParams.get("dest");
  }

  ionViewWillEnter(){
    this.placeAutocomplete();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseDestinationPage');
  }

  confirmClick(){
    const that = this;
    that.destAddress = that.value;
    AMap.plugin('AMap.Autocomplete', function () {
      var originAutoOptions = {
        city: "广州",
        citylimit: true
      };
      var originAuto = new AMap.Autocomplete(originAutoOptions);
      originAuto.search(that.destAddress, function (status, result)  {
        that.addressList = result.tips;
      });
    });
    return;
  }

  selectItem(item) {
    this.navCtrl.pop().then(() => {
      this.navParams.get("dest")(item.name);
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
