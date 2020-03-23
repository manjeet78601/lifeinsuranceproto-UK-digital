import { Component, OnInit } from '@angular/core';
import { HomeConstants,  } from './../home.constants';
import { from } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';
import { Router } from '@angular/router';
import { DataAnalyticsService, CategoryName, Action } from 'src/app/services/data-analytics.service';

@Component({
  selector: 'app-financial-budget',
  templateUrl: './financial-budget.component.html',
  styleUrls: ['./financial-budget.component.scss'],
})
export class FinancialBudgetComponent implements OnInit {
  panelOpenState = false;
  DOM_CONSTANTS = HomeConstants.FINANCIALBUDGET;
  PAGE_HEADER = HomeConstants.BUDGET_HEADER;
  PAGE_SUBHEADER = HomeConstants.BUDGET_SUB_HEADER;
  BTN = HomeConstants.BTN;
  progress = 0;

  constructor(
    private loader: LoaderService,
    private router: Router,
    private analytic: DataAnalyticsService
    ) { }

  ngOnInit() {
   // console.log(this.CONSTANTS.FINANCIALBUDGET);
  }

  incrementProgress(progress) {
    if (this.progress < 100 && this.progress < progress) {
      this.progress = progress;
    }

  }

  calculateBudget() {
    this.analytic.trackAnalyticData(CategoryName.BUDGET_CALCULATOR, Action.CLICK, 'Calculate');
    this.loader.showAutoHideLoader('Fetching Details...', 3000);
    setTimeout(() => {
      this.router.navigate(['/home/total-budget']);
    }, 3000);
  }

}
