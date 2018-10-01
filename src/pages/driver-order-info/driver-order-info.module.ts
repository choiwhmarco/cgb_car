import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverOrderInfoPage } from './driver-order-info';

@NgModule({
  declarations: [
    DriverOrderInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverOrderInfoPage),
  ],
})
export class DriverOrderInfoPageModule {}
