import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarConsumeLogPage } from './car-consume-log';

@NgModule({
  declarations: [
    CarConsumeLogPage,
  ],
  imports: [
    IonicPageModule.forChild(CarConsumeLogPage),
  ],
})
export class CarConsumeLogPageModule {}
