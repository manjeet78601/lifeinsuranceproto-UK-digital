import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthDetailsPageRoutingModule } from './health-details-routing.module';

import { HealthDetailsPage } from './health-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthDetailsPageRoutingModule
  ],
  declarations: [HealthDetailsPage]
})
export class HealthDetailsPageModule {}
