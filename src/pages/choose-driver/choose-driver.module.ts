import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseDriverPage } from './choose-driver';

@NgModule({
  declarations: [
    ChooseDriverPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseDriverPage),
  ],
})
export class ChooseDriverPageModule {}
