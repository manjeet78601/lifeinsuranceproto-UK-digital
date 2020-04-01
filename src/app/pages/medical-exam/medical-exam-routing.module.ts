import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalExamPage } from './medical-exam.page';
import { SechduleAppointmentComponent } from './sechdule-appointment/sechdule-appointment.component';

const routes: Routes = [
  {
    path: '',
    component: MedicalExamPage
  },

  // {
  //   path: 'sechdule',
  //   component: SechduleAppointmentComponent
  // }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalExamPageRoutingModule {}
