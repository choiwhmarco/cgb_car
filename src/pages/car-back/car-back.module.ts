import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarBackPage } from './car-back';

@NgModule({
  declarations: [
    CarBackPage,
  ],
  imports: [
    IonicPageModule.forChild(CarBackPage),
  ],
})
export class CarBackPageModule {}
