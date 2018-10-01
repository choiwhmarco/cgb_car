import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarMonitorPage } from './car-monitor';

@NgModule({
  declarations: [
    CarMonitorPage,
  ],
  imports: [
    IonicPageModule.forChild(CarMonitorPage),
  ],
})
export class CarMonitorPageModule {}
