import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocateLabPage } from './locate-lab.page';

const routes: Routes = [
  {
    path: '',
    component: LocateLabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocateLabPageRoutingModule {}
