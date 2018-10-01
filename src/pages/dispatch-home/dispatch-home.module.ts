import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DispatchHomePage } from './dispatch-home';

@NgModule({
  declarations: [
    DispatchHomePage,
  ],
  imports: [
    IonicPageModule.forChild(DispatchHomePage),
  ],
})
export class DispatchHomePageModule {}
