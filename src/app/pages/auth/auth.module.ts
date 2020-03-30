import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthPageRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../../sharedModules/material.module';
import { SharedModule } from '../../sharedModules/shared.module';
import { AuthPage } from './auth.page';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    MaterialModule,
    AuthPageRoutingModule
   
  ],
  declarations: [AuthPage,
  SigninComponent,
  SignupComponent,
  ProfileComponent,
  ForgotpasswordComponent]
})
export class AuthPageModule {}
