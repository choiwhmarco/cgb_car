import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup,FormControl } from "@angular/forms";

/**
 * Generated class for the ChooseOrderCommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choose-order-comment',
  templateUrl: 'choose-order-comment.html',
})
export class ChooseOrderCommentPage {

  registrationReasons;
  reasons;
  reasonsForm;
  data:string = "qwe";
  public nullString: string = null;
  public firstParam: string = null;
  public registration: string = "registration";
  private callback: any;
  public reasonChecked;
  public log;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getRegistrationReasons();
    this.getReasons();
    this.firstParam = this.navParams.get("firstPassed");
    this.reasonsForm = new FormGroup({
      "reasons": new FormControl({value: 'reason', disabled: false})
    });
    this.callback = this.navParams.get("callback");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseOrderCommentPage');
  }

  getRegistrationReasons(){
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
    ]
  }

  getReasons(){
    this.reasons=[
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
    ]
  }

  logForm(form){
    alert(form.value)
  }

  select(reason) {
    this.log = reason.description;
  }

  doSubmit(event) {
    this.navCtrl.pop().then(() => {
      this.navParams.get("callback")(this.log);
    });
  }

}
