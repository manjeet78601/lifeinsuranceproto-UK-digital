import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthDetailsPage } from './health-details.page';

const routes: Routes = [
  {
    path: '',
    component: HealthDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HealthDetailsPageRoutingModule {
}
