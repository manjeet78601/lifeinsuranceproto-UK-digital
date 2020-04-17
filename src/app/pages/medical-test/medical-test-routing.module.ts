import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalExamPage } from './medical-test.page';
import { LocateLabComponent } from './locate-lab/locate-lab.component';
import { StartMedicalTestComponent } from './start-medical-test/start-medical-test.component';
import { EmailApptComponent } from './email-appt/email-appt.component';
import { BookLabComponent } from './book-lab/book-lab.component';
import { LabDetailsComponent } from './lab-details/lab-details.component';
import { MyAppointmentsComponent } from './my-appointments/my-appointments.component';
import { LocateClinicComponent } from './locate-clinic/locate-clinic.component';
import { BookClinicComponent } from './book-clinic/book-clinic.component';
import { ClinicDetailsComponent } from './clinic-details/clinic-details.component';

const routes: Routes = [
  {
    path: '',
    component: StartMedicalTestComponent
  },

  {
    path: 'locate-lab',
    component: LocateLabComponent
  },
  {
    path: 'book-lab',
    component: BookLabComponent
  },
  {
    path: 'lab-details',
    component: LabDetailsComponent
  },
  {
    path: 'locate-clinic',
    component: LocateClinicComponent
  },
  {
    path: 'book-clinic',
    component: BookClinicComponent
  },
  {
    path: 'clinic-details',
    component: ClinicDetailsComponent
  },
  {
    path: 'email-appt',
    component: EmailApptComponent
  },
  {
    path: 'my-appointments',
    component: MyAppointmentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalExamPageRoutingModule { }
