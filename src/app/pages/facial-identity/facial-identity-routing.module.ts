import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacialIdentityPage } from './facial-identity.page';
import { FacialScanComponent } from './facial-scan/facial-scan.component';
import { ComplianceComponent } from './compliance/compliance.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path: '',
    component: FacialIdentityPage
  },
  {
    path: 'facial-scan',
    component: FacialScanComponent
  },
  {
    path: 'compliance',
    component: ComplianceComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacialIdentityPageRoutingModule { }
