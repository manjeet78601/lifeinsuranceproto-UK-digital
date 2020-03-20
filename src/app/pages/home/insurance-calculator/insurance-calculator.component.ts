import { Component, OnInit } from '@angular/core';
import {HomeConstants} from '../../home/home.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insurance-calculator',
  templateUrl: './insurance-calculator.component.html',
  styleUrls: ['./insurance-calculator.component.scss'],
})
export class InsuranceCalculatorComponent implements OnInit {

  PAGE_HEADER = HomeConstants.LIFE_INSURANCE_HEADER ;
  PAGE_SUB_HEADER = HomeConstants.LIFE_INSURANCE_SUB_HEADER;
  PAGE_CONTENT_QUERIES = HomeConstants.PAGE_CONTENT_QUERIES;
  BTTN = HomeConstants.BTTN;
  constructor( private router: Router) { }

  ngOnInit() {}

  InsuranceBudget() {
    this.router.navigate(['/home/budget']);

  }
}
