import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalExamPage } from './medical-exam.page';
import { SechduleAppointmentComponent } from './sechdule-appointment/sechdule-appointment.component';
import { ScheduleMedicalExamComponent } from './schedule-medical-exam/schedule-medical-exam.component';
import { EmailApptComponent } from './email-appt/email-appt.component';
import { SchduleCalenderComponent } from './schdule-calender/schdule-calender.component';
import { SchduleBookedComponent } from './schdule-booked/schdule-booked.component';
import { UrgentCareComponent } from './urgent-care/urgent-care.component';
import { MyAppointmentsComponent } from './my-appointments/my-appointments.component';

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
    path: 'schdule-calender',
    component: SchduleCalenderComponent
  },
  {
    path: 'schdule-booked',
    component: SchduleBookedComponent
  },

  {
    path: 'urgent-care',
    component: UrgentCareComponent
  },
  
  {
    path: 'my-appointments',
    component: MyAppointmentsComponent
  }
 

  // {
  //   path: 'schdule-calender',
  //   loadChildren: () => import('./schdule-calender/schdule-calender.module').then( m => m.SchduleCalenderPageModule)
  // },
  // {
  //   path : 'email-calender',
  //   component: EmailApptComponent
  // }
  // {
  //   path: 'email-calender',
  //   loadChildren: () => import('./email-calender/email-calender.module').then( m => m.EmailCalenderPageModule)
  // },
  // {
  //   path: 'urgent-care',
  //   loadChildren: () => import('./urgent-care/urgent-care.module').then( m => m.UrgentCarePageModule)
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalExamPageRoutingModule { }
