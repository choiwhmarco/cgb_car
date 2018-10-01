import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseStatusPage } from './choose-status';

@NgModule({
  declarations: [
    ChooseStatusPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseStatusPage),
  ],
})
export class ChooseStatusPageModule {}
