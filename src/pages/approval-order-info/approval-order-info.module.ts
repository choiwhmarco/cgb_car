import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ApprovalOrderInfoPage } from './approval-order-info';

@NgModule({
  declarations: [
    ApprovalOrderInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ApprovalOrderInfoPage),
  ],
})
export class ApprovalOrderInfoPageModule {}
