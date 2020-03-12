import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacialIdentityPageRoutingModule } from './facial-identity-routing.module';
import { MaterialModule } from '../../sharedModules/material.module';
import { SharedModule } from '../../sharedModules/shared.module';

import { FacialIdentityPage } from './facial-identity.page';
import { Camera } from '@ionic-native/camera/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaterialModule,
    SharedModule,
    FacialIdentityPageRoutingModule
  ],
  providers: [Camera],
  declarations: [FacialIdentityPage]
})
export class FacialIdentityPageModule {}
