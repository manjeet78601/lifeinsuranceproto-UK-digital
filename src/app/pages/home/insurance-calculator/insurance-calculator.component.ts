import { Component, OnInit } from '@angular/core';
import { HomeConstants } from '../../home/home.constants';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-insurance-calculator',
  templateUrl: './insurance-calculator.component.html',
  styleUrls: ['./insurance-calculator.component.scss'],
})
export class InsuranceCalculatorComponent implements OnInit {
  BTN = HomeConstants.BTN;
  PAGE_SUBTITLE = HomeConstants.PAGE_SUBTITLE;
  PAGE_HEADER = HomeConstants.LIFE_INSURANCE_HEADER;
  PAGE_SUB_HEADER = HomeConstants.LIFE_INSURANCE_SUB_HEADER;
  // STEP1_BOTTOM = HomeConstants.STEP1_BOTTOM;
  // BTTN = HomeConstants.BTTN;
  progress = 0;
  totalCoverage = 0;
  INSURANCE_CALCULATOR = HomeConstants.INSURANCE_CALCULATOR;

constructor(private router: Router, private navigationService: MenuService) { }

  ngOnInit() { }

  InsuranceBudget() {
    this.navigationService.setCompletedMenu('Insurance calculator');
    this.router.navigate(['/home/budget']);

  }

  incrementProgress(progress) {
    if (this.progress < 100 && this.progress < progress) {
      this.progress = progress;
    }

  }

  calculateCoverage() {
    this.INSURANCE_CALCULATOR.QUESTIONS.forEach(element => {
      if (element.VALUE === 0) {
        this.totalCoverage = 0;
        return false;
      } else {
        this.totalCoverage = Math.floor(Math.random() * 100000) + 10000;
      }
    });
  }

  createAccount() {
    this.router.navigate(['/auth/signup']);
  }


}



