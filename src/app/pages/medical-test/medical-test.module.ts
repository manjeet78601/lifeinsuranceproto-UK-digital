import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalExamPageRoutingModule } from './medical-test-routing.module';

import { MedicalExamPage } from './medical-test.page';
import { SharedModule } from 'src/app/sharedModules/shared.module';
import { LocateLabComponent } from './locate-lab/locate-lab.component';
import { StartMedicalTestComponent } from './start-medical-test/start-medical-test.component';
import { EmailApptComponent } from './email-appt/email-appt.component';
import { BookLabComponent } from './book-lab/book-lab.component';
import { LabDetailsComponent } from './lab-details/lab-details.component';
import { MyAppointmentsComponent } from './my-appointments/my-appointments.component';
import { LocateClinicComponent } from './locate-clinic/locate-clinic.component';
import { BookClinicComponent } from './book-clinic/book-clinic.component';
import { ClinicDetailsComponent } from './clinic-details/clinic-details.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalExamPageRoutingModule,
    SharedModule,
  ],

  declarations: [MedicalExamPage, LocateLabComponent, StartMedicalTestComponent, MyAppointmentsComponent,
    EmailApptComponent, BookLabComponent, LabDetailsComponent, LocateClinicComponent, BookClinicComponent, ClinicDetailsComponent],
})
export class MedicalExamPageModule { }
