import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddRegistrationPage } from './add-registration';

@NgModule({
  declarations: [
    AddRegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(AddRegistrationPage),
  ],
})
export class AddRegistrationPageModule {}
