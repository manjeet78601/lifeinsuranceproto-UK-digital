import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalDetailsPageRoutingModule } from './personal-details-routing.module';

import { PersonalDetailsPage } from './personal-details.page';
import { SharedModule } from 'src/app/sharedModules/shared.module';

@NgModule({
  imports: [
    SharedModule,
    IonicModule,
    PersonalDetailsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PersonalDetailsPage]
})
export class PersonalDetailsPageModule {}
