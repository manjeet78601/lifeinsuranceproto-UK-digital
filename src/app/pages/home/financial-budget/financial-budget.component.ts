import { Component, OnInit } from '@angular/core';
import { HomeConstants, } from './../home.constants';
import { from } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';
import { Router } from '@angular/router';
import { DataAnalyticsService, CategoryName, Action } from 'src/app/services/data-analytics.service';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, Validator, FormBuilder, Validators } from '@angular/forms';

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
  isUerLoggedIn: boolean;
  constructor(
    private loader: LoaderService,
    private router: Router,
    private analytic: DataAnalyticsService,
    private userService: UserService,
    private auth: AuthService
  ) {
    this.isUerLoggedIn = this.auth.isUserLoggedIn;
  }

  ngOnInit() {
    // console.log(this.CONSTANTS.FINANCIALBUDGET);
  }
  ionViewDidEnter() {
    if (this.auth.isMinAccountLinked === true) {
      this.prefillQuestions();
    }
  }
  prefillQuestions() {
    const dummyData = [[2000, 170, 1500, 4000], [470, 1500, 100, 120, 200], [2524, 900000, 2000, 1000], [1200, 170, 1500, 4000]];
    this.DOM_CONSTANTS.forEach((data, index) => {
      data.isAllQuestionsAnswered = true;
      data.QUESTIONS.forEach((quesData, quesIndex) => {
        quesData.VALUE =  String((dummyData[index][quesIndex]));
        quesData.isVisited = true;
      });
    });
    const filledQues = this.DOM_CONSTANTS.filter(data => {
      return data.isAllQuestionsAnswered === true;
    });
    this.progress = Math.floor(25 * filledQues.length);
  }
  calculateBudget() {
    const totalBudget = [];
    this.userService.setCalculatedBudget(this.DOM_CONSTANTS)
      .subscribe(res => console.log(res));
    this.analytic.trackAnalyticData(CategoryName.BUDGET_CALCULATOR, Action.CLICK, 'Calculate');
    this.loader.showAutoHideLoader('Fetching Details...', 3000);
    setTimeout(() => {
      this.router.navigate(['/home/total-budget']);
    }, 3000);
  }

  createAccount() {
    this.router.navigate(['/auth/signup']);
  }
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
  checkQuestionStatus(id: number | string) {
    const currentItem = this.DOM_CONSTANTS.find(item => item.ID === id);

    currentItem.isAllQuestionsAnswered = currentItem.QUESTIONS.every(data => {
      return !!data.VALUE;
    });
    const completedQues = this.DOM_CONSTANTS.filter(data => {
      return data.isAllQuestionsAnswered === true;
    });
    this.progress = Math.floor(25 * completedQues.length);

  }
}
