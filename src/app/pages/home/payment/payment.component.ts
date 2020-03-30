import { Component, OnInit } from '@angular/core';
import { HomeConstants, } from './../home.constants';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {

  DOM_CONSTANTS = HomeConstants.PAYMENT;
  constructor() { }

  ngOnInit() {}

}
