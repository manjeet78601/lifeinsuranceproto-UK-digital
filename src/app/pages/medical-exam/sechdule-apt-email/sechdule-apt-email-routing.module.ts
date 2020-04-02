import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SechduleAptEmailPage } from './sechdule-apt-email.page';

const routes: Routes = [
  {
    path: '',
    component: SechduleAptEmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SechduleAptEmailPageRoutingModule {}
