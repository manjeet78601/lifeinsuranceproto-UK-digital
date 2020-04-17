import { Component, OnInit } from '@angular/core';
import { CompareQuotesConstant, } from '../../../properties/compare-quotes.constant';
import { Router } from '@angular/router';
@Component({
  selector: 'app-email-appt',
  templateUrl: './email-appt.component.html',
  styleUrls: ['./email-appt.component.scss'],
})
export class EmailApptComponent implements OnInit {

  DOM_CONSTANTS = CompareQuotesConstant.EMAIL_APPT;
  BTN = CompareQuotesConstant.BTTN;
  constructor(private router: Router) { }

  ngOnInit() { }
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
}
