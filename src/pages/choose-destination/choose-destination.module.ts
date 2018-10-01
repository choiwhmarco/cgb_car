import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseDestinationPage } from './choose-destination';

@NgModule({
  declarations: [
    ChooseDestinationPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseDestinationPage),
  ],
})
export class ChooseDestinationPageModule {}
