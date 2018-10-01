import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMaintainOrderPage } from './add-maintain-order';

@NgModule({
  declarations: [
    AddMaintainOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMaintainOrderPage),
  ],
})
export class AddMaintainOrderPageModule {}
