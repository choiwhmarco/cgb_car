import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaintainApprovalPage } from './maintain-approval';

@NgModule({
  declarations: [
    MaintainApprovalPage,
  ],
  imports: [
    IonicPageModule.forChild(MaintainApprovalPage),
  ],
})
export class MaintainApprovalPageModule {}
