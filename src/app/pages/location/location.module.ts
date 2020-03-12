import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationPageRoutingModule } from './location-routing.module';

import { LocationPage } from './location.page';
import { MaterialModule } from 'src/app/sharedModules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationPageRoutingModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  declarations: [LocationPage],
  providers: []
})
export class LocationPageModule {}
