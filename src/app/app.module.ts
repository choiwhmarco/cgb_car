import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from "@angular/http";
import { AppVersion } from "@ionic-native/app-version";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ForgetPasswordPage } from '../pages/forget-password/forget-password';
import { IonicStorageModule } from '@ionic/storage';
import { ModifyPhonePage } from '../pages/modify-phone/modify-phone';
import { AboutPage } from '../pages/about/about';
import { MemberPage } from "../pages/member/member";
import { ChooseDeptPage } from "../pages/choose-dept/choose-dept";
import { ResetPasswordPage } from "../pages/reset-password/reset-password";
import { ReportTablePage } from "../pages/report-table/report-table";
import { ApproverHomePage } from "../pages/approver-home/approver-home";
import { RecordPage } from "../pages/record/record";
import { AddRegistrationPage } from "../pages/add-registration/add-registration";
import { ChooseDestinationPage } from "../pages/choose-destination/choose-destination";
import { ChooseOriginPage } from "../pages/choose-origin/choose-origin";
import { ChooseOrderCommentPage } from "../pages/choose-order-comment/choose-order-comment";
import { ApplyPage } from "../pages/apply/apply";
import { ApplydoPage } from "../pages/applydo/applydo";
import { DriverHomePage } from "../pages/driver-home/driver-home";
import { MaintainApplyPage } from "../pages/maintain-apply/maintain-apply";
import { AddMaintainOrderPage } from "../pages/add-maintain-order/add-maintain-order";
import { ChooseCarPage } from "../pages/choose-car/choose-car";
import { ChooseMaintainShopPage } from "../pages/choose-maintain-shop/choose-maintain-shop";
import { DealCarPeccancyPage } from "../pages/deal-car-peccancy/deal-car-peccancy";
import { CarConsumeLogPage } from "../pages/car-consume-log/car-consume-log";
import { ApplyCarConsumeLogPage } from "../pages/apply-car-consume-log/apply-car-consume-log";
import { ChooseDriverPage } from "../pages/choose-driver/choose-driver";
import { DispatchHomePage } from "../pages/dispatch-home/dispatch-home";
import { CarPeccancyPage } from "../pages/car-peccancy/car-peccancy";
import { ApplyCarPeccancyPage } from "../pages/apply-car-peccancy/apply-car-peccancy";
import { DealCarConsumeLogPage } from "../pages/deal-car-consume-log/deal-car-consume-log";
import { MaintainApprovalPage } from "../pages/maintain-approval/maintain-approval";
import { CarMonitorPage } from "../pages/car-monitor/car-monitor";
import { ApprovalOrderInfoPage } from "../pages/approval-order-info/approval-order-info";
import { DriverOrderInfoPage } from "../pages/driver-order-info/driver-order-info";
import { CommentPage } from "../pages/comment/comment";
import { UseCarCountPage } from "../pages/use-car-count/use-car-count";
import { ChooseStatusPage } from "../pages/choose-status/choose-status";
import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';
import { StorageProvider } from '../providers/storage/storage';
import { CallNumber } from "@ionic-native/call-number";
import { Ionic2RatingModule } from "ionic2-rating";
import { GlobalData } from "../providers/global-data/global-data";
import { Utils } from '../providers/utils/utils';
import { Toast } from "@ionic-native/toast";
import { Network } from "@ionic-native/network";
import { AppMinimize } from "@ionic-native/app-minimize";
import { ConstantsProvider } from '../providers/constants/constants';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ForgetPasswordPage,
    ModifyPhonePage,
    AboutPage,
    MemberPage,
    ChooseDeptPage,
    ResetPasswordPage,
    ReportTablePage,
    ApproverHomePage,
    RecordPage,
    AddRegistrationPage,
    ChooseDestinationPage,
    ChooseOriginPage,
    ChooseOrderCommentPage,
    ApplyPage,
    ApplydoPage,
    DriverHomePage,
    MaintainApplyPage,
    AddMaintainOrderPage,
    ChooseCarPage,
    ChooseMaintainShopPage,
    DealCarPeccancyPage,
    CarConsumeLogPage,
    ApplyCarConsumeLogPage,
    ChooseDriverPage,
    DispatchHomePage,
    CarPeccancyPage,
    ApplyCarPeccancyPage,
    DealCarConsumeLogPage,
    MaintainApprovalPage,
    CarMonitorPage,
    ApprovalOrderInfoPage,
    DriverOrderInfoPage,
    CommentPage,
    UseCarCountPage,
    ChooseStatusPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: '返回'
    }),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    Ionic2RatingModule,
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ForgetPasswordPage,
    ModifyPhonePage,
    AboutPage,
    MemberPage,
    ChooseDeptPage,
    ResetPasswordPage,
    ReportTablePage,
    ApproverHomePage,
    RecordPage,
    AddRegistrationPage,
    ChooseDestinationPage,
    ChooseOriginPage,
    ChooseOrderCommentPage,
    ApplyPage,
    ApplydoPage,
    DriverHomePage,
    MaintainApplyPage,
    AddMaintainOrderPage,
    ChooseCarPage,
    ChooseMaintainShopPage,
    DealCarPeccancyPage,
    CarConsumeLogPage,
    ApplyCarConsumeLogPage,
    ChooseDriverPage,
    DispatchHomePage,
    CarPeccancyPage,
    ApplyCarPeccancyPage,
    DealCarConsumeLogPage,
    MaintainApprovalPage,
    CarMonitorPage,
    ApprovalOrderInfoPage,
    DriverOrderInfoPage,
    CommentPage,
    UseCarCountPage,
    ChooseStatusPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    StorageProvider,
    CallNumber,
    GlobalData,
    Utils,
    ConstantsProvider,
   AppVersion,
    Toast,
    Network,
    AppMinimize,
  ]
})
export class AppModule {}
