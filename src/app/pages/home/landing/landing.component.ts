import { Component, OnInit } from '@angular/core';
import { HomeConstants} from './../home.constants';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent  {
  DOM_CONSTANTS = HomeConstants.HOME_PAGE;
  maritalStaus: any[] = [
    { name: 'UnMarried' },
    { name: 'Married' },
    { name: 'Single' },
    { name: 'Single Parent' },
    { name: 'Divorced' },
  ];
  constructor() { }


}
