import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarFinishPage } from './car-finish';

@NgModule({
  declarations: [
    CarFinishPage,
  ],
  imports: [
    IonicPageModule.forChild(CarFinishPage),
  ],
})
export class CarFinishPageModule {}
