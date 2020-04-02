import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalExamPage } from './medical-exam.page';
import { SechduleAppointmentComponent } from './sechdule-appointment/sechdule-appointment.component';
import { EmailApptComponent } from './email-appt/email-appt.component';
  
const routes: Routes = [
  {
    path: '',
    component: MedicalExamPage
  },

  {
    path: 'sechdule-appointment',
    component: SechduleAppointmentComponent
  },
  {
    path: 'email-appt',
    component: EmailApptComponent
  },
  // {
  //   path: 'urgent-care',
  //   loadChildren: () => import('./urgent-care/urgent-care.module').then( m => m.UrgentCarePageModule)
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalExamPageRoutingModule {}
