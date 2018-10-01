import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportTablePage } from './report-table';

@NgModule({
  declarations: [
    ReportTablePage,
  ],
  imports: [
    IonicPageModule.forChild(ReportTablePage),
  ],
})
export class ReportTablePageModule {}
