import { Component, OnInit } from '@angular/core';
import { HomeConstants,  } from './../home.constants';
import { from } from 'rxjs';

@Component({
  selector: 'app-financial-budget',
  templateUrl: './financial-budget.component.html',
  styleUrls: ['./financial-budget.component.scss'],
})
export class FinancialBudgetComponent implements OnInit {
  panelOpenState = false;
  DOM_CONSTANTS = HomeConstants.FINANCIALBUDGET;

  constructor() { }

  ngOnInit() {
   // console.log(this.CONSTANTS.FINANCIALBUDGET);
  }

}
