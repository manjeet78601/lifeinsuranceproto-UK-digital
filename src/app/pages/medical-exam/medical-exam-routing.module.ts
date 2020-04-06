import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalExamPage } from './medical-exam.page';
import { SechduleAppointmentComponent } from './sechdule-appointment/sechdule-appointment.component';
import { ScheduleMedicalExamComponent } from './schedule-medical-exam/schedule-medical-exam.component';
import { EmailApptComponent } from './email-appt/email-appt.component';

// import { SchduleBookedComponent } from './schdule-booked/schdule-booked.component';

import {ScheduleDoctorVisitComponent} from './schedule-doctor-visit/schedule-doctor-visit.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';


const routes: Routes = [
  {
    path: '',
    component: ScheduleMedicalExamComponent
  },

  {
    path: 'sechdule-appointment',
    component: SechduleAppointmentComponent
  },
  {
    path: 'email-appt',
    component: EmailApptComponent
  },
 
   {
    path: 'schedule-doctor-visit',
 component : ScheduleDoctorVisitComponent
   },
   {
     path: 'appointment-details',
      component: AppointmentDetailsComponent
   }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalExamPageRoutingModule { }
