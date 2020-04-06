import { Component, OnInit } from '@angular/core';
import { HomeConstants } from './../home.constants';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

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
  isUerLoggedIn: boolean;
  constructor(
    private router: Router,
    private navigationService: MenuService,
    private userService: UserService,
    private auth: AuthService,
    private toast: ToastService
  ) {
    this.isUerLoggedIn = this.auth.isUserLoggedIn;
  }

  ngOnInit() {
    this.getTotals();

  }

  getAmountLeft() {
    const total = (this.totals[0].value - this.totals[1].value) > 0 ? (this.totals[0].value - this.totals[1].value) : 0;
    return total;
  }
  setAmountLeft() {
    this.amountLeft = this.getAmountLeft();
    if (this.amountLeft === 0) {
      this.toast.presentToast('Seems like your expenses are greater than income.', 4000);
    }
  }

  getTotals() {
    this.totals = this.userService.getCalculatedBudget();
    this.setAmountLeft();
  }

  getQuote() {
    this.navigationService.setCompletedMenu('Budget Calculator');
    this.router.navigate(['/home/health']);
  }
  createAccount() {
    this.router.navigate(['/auth/signup']);
  }
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
}
