import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../../sharedModules/material.module';
import { SharedModule } from '../../sharedModules/shared.module';
import { AuthPage } from './auth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    MaterialModule,
    AuthPageRoutingModule
   
  ],
  declarations: [AuthPage]
})
export class AuthPageModule {}
