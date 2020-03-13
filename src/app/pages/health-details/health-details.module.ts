import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthDetailsPageRoutingModule } from './health-details-routing.module';

import { HealthDetailsPage } from './health-details.page';
import { SharedModule } from 'src/app/sharedModules/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthDetailsPageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [HealthDetailsPage]
})
export class HealthDetailsPageModule {}
