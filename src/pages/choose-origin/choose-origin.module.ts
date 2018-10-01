import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseOriginPage } from './choose-origin';

@NgModule({
  declarations: [
    ChooseOriginPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseOriginPage),
  ],
})
export class ChooseOriginPageModule {}
