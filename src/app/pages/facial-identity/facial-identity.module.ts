import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/sharedModules/shared.module';
import { FacialIdentityPageRoutingModule } from './facial-identity-routing.module';
import { MaterialModule } from '../../sharedModules/material.module';
import { FacialIdentityPage } from './facial-identity.page';
import { FacialScanComponent } from './facial-scan/facial-scan.component';
import { ComplianceComponent } from './compliance/compliance.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    SharedModule,
    FacialIdentityPageRoutingModule
  ],
  declarations: [FacialIdentityPage, FacialScanComponent, ComplianceComponent, PaymentComponent],
})
export class FacialIdentityPageModule { }
