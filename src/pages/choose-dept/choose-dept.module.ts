import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseDeptPage } from './choose-dept';

@NgModule({
  declarations: [
    ChooseDeptPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseDeptPage),
  ],
})
export class ChooseDeptPageModule {}
