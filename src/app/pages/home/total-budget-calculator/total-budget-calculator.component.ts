import { Component, OnInit } from '@angular/core';
import { HomeConstants } from './../home.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-total-budget-calculator',
  templateUrl: './total-budget-calculator.component.html',
  styleUrls: ['./total-budget-calculator.component.scss'],
})
export class TotalBudgetCalculatorComponent implements OnInit {
  DOM_CONSTANTS = HomeConstants.BUDGET_CALCULATOR;
  BTN = HomeConstants.BTN;
  amountLeft = 1000;
  totals: any[];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.getTotals();
  }

  getTotals() {
    this.totals = this.DOM_CONSTANTS.TOTALS;
    this.totals.map(res => res.AMOUNT = 450);
  }

  getQuote() {
    this.router.navigate(['/']);
  }

}
