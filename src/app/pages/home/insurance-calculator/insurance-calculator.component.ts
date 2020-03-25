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


  PAGE_SUBTITLE = HomeConstants.PAGE_SUBTITLE;
  PAGE_HEADER = HomeConstants.LIFE_INSURANCE_HEADER;
  PAGE_SUB_HEADER = HomeConstants.LIFE_INSURANCE_SUB_HEADER;
  PAGE_CONTENT_QUERIES = HomeConstants.PAGE_CONTENT_QUERIES;
  BTTN = HomeConstants.BTTN;
  BUTTON_CONTENT = HomeConstants.BUTTON_CONTENT;
  INSURANCE_RECOMENDATION = HomeConstants.INSURANCE_RECOMENDATION;
  LETS_GETS_TARTED = HomeConstants.LETS_GETS_TARTED;
  PAGE_CONTENT_US1 = HomeConstants.PAGE_CONTENT_US1;
  PAGE_BOTTOM = HomeConstants.PAGE_BOTTOM;
  progress = 0;

  PAGE_CONTENT_US = HomeConstants.PAGE_CONTENT_US;

  INSURANCE_CALCULATOR = HomeConstants.INSURANCE_CALCULATOR;


  constructor(private router: Router,
    private navigationService: MenuService) { }

  ngOnInit() { }

  InsuranceBudget() {
    this.navigationService.setCompletedMenu('Insurance calculator')
    this.router.navigate(['/home/budget']);

  }

  incrementProgress(progress) {
    if (this.progress < 100 && this.progress < progress) {
      this.progress = progress;
    }

  }


}



