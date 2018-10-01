import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Ionic2RatingModule } from "ionic2-rating";
import { ApproverHomePage } from './approver-home';

@NgModule({
  declarations: [
    ApproverHomePage,
  ],
  imports: [
    IonicPageModule.forChild(ApproverHomePage),
    Ionic2RatingModule,
  ],
})
export class ApproverHomePageModule {}
