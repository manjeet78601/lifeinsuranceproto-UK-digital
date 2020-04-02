import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SechduleAptEmailPageRoutingModule } from './sechdule-apt-email-routing.module';

import { SechduleAptEmailPage } from './sechdule-apt-email.page';
import { SharedModule } from 'src/app/sharedModules/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SechduleAptEmailPageRoutingModule,
    SharedModule
  ],
  declarations: [SechduleAptEmailPage]
})
export class SechduleAptEmailPageModule {}
