import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalExamPageRoutingModule } from './medical-exam-routing.module';

import { MedicalExamPage } from './medical-exam.page';
import { SharedModule } from 'src/app/sharedModules/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalExamPageRoutingModule,
    SharedModule
  ],
  declarations: [MedicalExamPage]
})
export class MedicalExamPageModule {}
