import { Component, OnInit } from '@angular/core';
import { HomeConstants,  } from './../home.constants';
import { from } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';

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

  constructor(private loader: LoaderService) { }

  ngOnInit() {
   // console.log(this.CONSTANTS.FINANCIALBUDGET);
  }

  incrementProgress(progress) {
    if (this.progress < 100 && this.progress < progress) {
      this.progress = progress;
    }

  }

  calculateBudget() {
    this.loader.showAutoHideLoader('Please wait', 5000);
  }

}
