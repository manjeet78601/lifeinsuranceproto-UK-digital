import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UrgentCarePage } from './urgent-care.page';

const routes: Routes = [
  {
    path: '',
    component: UrgentCarePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UrgentCarePageRoutingModule {}
