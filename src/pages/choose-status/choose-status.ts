import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup } from "@angular/forms";

/**
 * Generated class for the ChooseStatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choose-status',
  templateUrl: 'choose-status.html',
})



export class ChooseStatusPage {

  statuses: any = [];
  selectedArray :any = [];
  statusSelected;
  null: any = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getStatus();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseStatusPage');
  }

  logForm(form){
    alert(form.value)
  }

  confirmStatus(){
    this.navCtrl.pop().then(() => {
      this.navParams.get('callback')(this.selectedArray);
    });
  }

  select(data){
    if (data.checked == true) {
      this.selectedArray.push(data);
    } else {
      let newArray = this.selectedArray.filter(function(el) {
        return el.testID !== data.testID;
      });
      this.selectedArray = newArray;
    }
    console.log(this.selectedArray);
  }

  getStatus(){
    this.statuses = [
      { name: "未调度", id: 1, checked: false  },
      { name: "待分配", id: 2, checked: false  },
      { name: "待重新分配", id: 3, checked: false  },
      { name: "待出车", id: 4, checked: false  },
      { name: "进行中", id: 5, checked: false  },
      { name: "待回场", id: 6, checked: false  },
      { name: "已完成", id: 7, checked: false  },
      { name: "已评价", id: 8, checked: false  },
      { name: "已取消", id: 9, checked: false  },
      { name: "等待确认", id: 10, checked: false  },
      { name: "待确认回场", id: 11, checked: false  },
      { name: "待审批", id: 12, checked: false  },
      { name: "审批拒绝", id: 13, checked: false  },
      { name: "强制回场", id: 14, checked: false  },
  ];
  }
}
