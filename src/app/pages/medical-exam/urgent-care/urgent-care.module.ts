import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
<<<<<<< HEAD

//import { UrgentCarePageRoutingModule } from './urgent-care-routing.module';

=======
//import { UrgentCarePageRoutingModule } from './urgent-care-routing.module';
>>>>>>> 448b77745beeebede3a0d4589b4f90be09ee9e53
import { UrgentCarePage } from './urgent-care.page';
import { SharedModule } from 'src/app/sharedModules/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD
    //UrgentCarePageRoutingModule,
=======
 // UrgentCarePageRoutingModule,
>>>>>>> 448b77745beeebede3a0d4589b4f90be09ee9e53
    SharedModule
  ],
  declarations: [UrgentCarePage]
})
export class UrgentCarePageModule {}
