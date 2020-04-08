import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalExamPageRoutingModule } from './medical-exam-routing.module';

import { MedicalExamPage } from './medical-exam.page';
import { SharedModule } from 'src/app/sharedModules/shared.module';
import { SechduleAppointmentComponent } from './sechdule-appointment/sechdule-appointment.component';
import { ScheduleMedicalExamComponent } from './schedule-medical-exam/schedule-medical-exam.component';
import { EmailApptComponent } from './email-appt/email-appt.component';
import { SchduleCalenderComponent } from './schdule-calender/schdule-calender.component';
import { SchduleBookedComponent } from './schdule-booked/schdule-booked.component';
import { UrgentCareComponent } from './urgent-care/urgent-care.component';
import { MyAppointmentsComponent } from './my-appointments/my-appointments.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalExamPageRoutingModule,
    SharedModule,
  ],

  declarations: [MedicalExamPage, SechduleAppointmentComponent, ScheduleMedicalExamComponent,
    EmailApptComponent, SchduleCalenderComponent, SchduleBookedComponent, UrgentCareComponent, MyAppointmentsComponent],
})
export class MedicalExamPageModule { }
