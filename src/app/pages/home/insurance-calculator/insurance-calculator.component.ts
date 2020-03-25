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
<<<<<<< HEAD
   boolean = true;


  gender = ['welcoome to my room' , 'ans is yes u r welcome'];
=======
  isShow = false;
  Value;
  Question;
  Answer;

  gender = ['welcoome to my room', 'ans is yes u r welcome'];
  // gender1 = ['Welcome to page'];
>>>>>>> 5c14a1ad4f3f50b4d5e54e10aff92e718dc2d3e7

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


 constructor( private router: Router) { }

  ngOnInit() {}

  InsuranceBudget() {
    this.router.navigate(['/home/budget']);

  }

  incrementProgress(progress) {
    if (this.progress < 100 && this.progress < progress) {
      this.progress = progress;
    }

  }


}



