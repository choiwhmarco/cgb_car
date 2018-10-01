import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseCarPage } from './choose-car';

@NgModule({
  declarations: [
    ChooseCarPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseCarPage),
  ],
})
export class ChooseCarPageModule {}
