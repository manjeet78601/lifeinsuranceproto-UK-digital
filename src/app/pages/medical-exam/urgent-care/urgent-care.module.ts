import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
//import { UrgentCarePageRoutingModule } from './urgent-care-routing.module';
import { UrgentCarePage } from './urgent-care.page';
import { SharedModule } from 'src/app/sharedModules/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
 // UrgentCarePageRoutingModule,
    SharedModule
  ],
  declarations: [UrgentCarePage]
})
export class UrgentCarePageModule {}
