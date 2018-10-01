import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DispatchHomePage } from "../dispatch-home/dispatch-home";
import { AboutPage } from '../about/about';
import { ApproverHomePage } from "../approver-home/approver-home";
import { MemberPage } from "../member/member";
import { ReportTablePage } from "../report-table/report-table";
import { RecordPage } from "../record/record";
import { ApplyPage } from "../apply/apply";
import { DriverHomePage } from "../driver-home/driver-home";
import { MaintainApplyPage } from "../maintain-apply/maintain-apply";
import { DealCarPeccancyPage } from "../deal-car-peccancy/deal-car-peccancy";
import { CarConsumeLogPage } from "../car-consume-log/car-consume-log";
import { CarPeccancyPage } from "../car-peccancy/car-peccancy";
import { DealCarConsumeLogPage } from "../deal-car-consume-log/deal-car-consume-log";
import { MaintainApprovalPage } from "../maintain-approval/maintain-approval";
import { CarMonitorPage } from "../car-monitor/car-monitor";
import { RestProvider } from "../../providers/rest/rest";
import { Storage } from "@ionic/storage";
import { GlobalData } from "../../providers/global-data/global-data";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name: String;
  dept:String;
  user: any;
  token: string;
  resources: any = [];
  showReportIcon: boolean = false;
  showApproveIcon: boolean = false;
  showSpecialDuty: boolean = false;
  showMaintainIcon: boolean = false;
  constructor(public navCtrl: NavController, public storage: Storage, private globalData: GlobalData) {
    this.storage.get('user').then(data=>{
      this.globalData.set_user(JSON.parse(data));
      this.name = this.globalData.get_user().name;
      this.dept = this.globalData.get_user().deptName;
      this.resources = this.globalData.get_user().resources;
    });
  }





  public getStoredData() {
    if(this.resources){
      for (let resourcesKey in this.resources) {
        if(resourcesKey == "ordersView" || resourcesKey == "dutyLogView" || resourcesKey == "syslogView" ||
          resourcesKey == "useFuelView" || resourcesKey == "unitollLogView" || resourcesKey == "fuelDetailView"){
          this.showReportIcon = true;
        }
        else if(resourcesKey == "Approve"){
          this.showApproveIcon = true;
        }
        else if(resourcesKey == "CarManager"){
          this.showSpecialDuty = true;
        }

      }
    }
  }


  ab(){
    this.navCtrl.push(AboutPage);
  }
  goPassenger(){
    this.navCtrl.push(ApplyPage);
  }
  goMember(){
    this.navCtrl.push(MemberPage);
  }
  goReport(){
    this.navCtrl.push(ReportTablePage);
  }
  goApproverHome(){
    this.navCtrl.push(ApproverHomePage);
  }
  goRegistration(){
    this.navCtrl.push(RecordPage);
  }

  goDriver(){
    this.navCtrl.push(DriverHomePage);
  }
  goMaintainApply(){
    this.navCtrl.push(MaintainApplyPage);
  }
  dealCarPeccancy(){
    this.navCtrl.push(DealCarPeccancyPage);
  }
  goCarConsumeLog(){
    this.navCtrl.push(CarConsumeLogPage);
  }
  goDispatcher(){
    this.navCtrl.push(DispatchHomePage);
  }
  goCarPeccancy(){
    this.navCtrl.push(CarPeccancyPage);
  }
  dealCarConsumeLog(){
    this.navCtrl.push(DealCarConsumeLogPage);
  }
  goMaintainApproval(){
    this.navCtrl.push(MaintainApprovalPage);
  }
  goCarLocation(){
    this.navCtrl.push(CarMonitorPage);
  }
}
