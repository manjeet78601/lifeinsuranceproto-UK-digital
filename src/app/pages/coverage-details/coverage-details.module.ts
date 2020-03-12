import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoverageDetailsPageRoutingModule } from './coverage-details-routing.module';

import { CoverageDetailsPage } from './coverage-details.page';
import { SharedModule } from 'src/app/sharedModules/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoverageDetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [CoverageDetailsPage]
})
export class CoverageDetailsPageModule {}
