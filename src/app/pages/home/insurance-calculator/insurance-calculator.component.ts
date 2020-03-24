import { Component, OnInit } from '@angular/core';
import {HomeConstants} from '../../home/home.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insurance-calculator',
  templateUrl: './insurance-calculator.component.html',
  styleUrls: ['./insurance-calculator.component.scss'],
})
export class InsuranceCalculatorComponent implements OnInit {
  isShow = false;
 Value;
 Question;
 Answer;

  gender = ['welcoome to my room' , 'ans is yes u r welcome'];
  // gender1 = ['Welcome to page'];

  PAGE_SUBTITLE = HomeConstants.PAGE_SUBTITLE;
PAGE_HEADER = HomeConstants.LIFE_INSURANCE_HEADER ;
  PAGE_SUB_HEADER = HomeConstants.LIFE_INSURANCE_SUB_HEADER;
  PAGE_CONTENT_QUERIES = HomeConstants.PAGE_CONTENT_QUERIES;
  BTTN = HomeConstants.BTTN;
  BUTTON_CONTENT = HomeConstants.BUTTON_CONTENT;
  INSURANCE_RECOMENDATION = HomeConstants.INSURANCE_RECOMENDATION;


 constructor( private router: Router) { }

  ngOnInit() {}

  InsuranceBudget() {
    this.router.navigate(['/home/budget']);

  }


    }



