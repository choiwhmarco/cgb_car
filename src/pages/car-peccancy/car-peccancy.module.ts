import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarPeccancyPage } from './car-peccancy';

@NgModule({
  declarations: [
    CarPeccancyPage,
  ],
  imports: [
    IonicPageModule.forChild(CarPeccancyPage),
  ],
})
export class CarPeccancyPageModule {}
