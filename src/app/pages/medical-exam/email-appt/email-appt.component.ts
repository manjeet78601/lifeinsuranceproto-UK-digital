import { Component, OnInit } from '@angular/core';
import { CompareQuotesConstant, } from '../../../properties/compare-quotes.constant';
@Component({
  selector: 'app-email-appt',
  templateUrl: './email-appt.component.html',
  styleUrls: ['./email-appt.component.scss'],
})
export class EmailApptComponent implements OnInit {

  DOM_CONSTANTS = CompareQuotesConstant.EMAIL_APPT;
  BTN = CompareQuotesConstant.BTTN;
  constructor() { }

  ngOnInit() { }

}
