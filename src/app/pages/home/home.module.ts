import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { InsuranceCalculatorComponent } from './insurance-calculator/insurance-calculator.component';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from 'src/app/sharedModules/shared.module';
import { FinancialBudgetComponent } from './financial-budget/financial-budget.component';
import { ChoosePlanComponent } from './choose-plan/choose-plan.component';
import { CompareQuotesComponent } from './compare-quotes/compare-quotes.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { TotalBudgetCalculatorComponent } from './total-budget-calculator/total-budget-calculator.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule
  ],
  declarations: [
    HomePage,
    LandingComponent,
    InsuranceCalculatorComponent,
    FinancialBudgetComponent,
    ChoosePlanComponent,
    CompareQuotesComponent,
    ContactComponent,
    HelpComponent,
    TotalBudgetCalculatorComponent
  ]
})
export class HomePageModule {}
