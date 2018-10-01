import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseOrderCommentPage } from './choose-order-comment';

@NgModule({
  declarations: [
    ChooseOrderCommentPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseOrderCommentPage),
  ],
})
export class ChooseOrderCommentPageModule {}
