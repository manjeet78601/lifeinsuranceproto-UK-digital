import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoverageDetailsPage } from './coverage-details.page';

const routes: Routes = [
  {
    path: '',
    component: CoverageDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoverageDetailsPageRoutingModule {}
