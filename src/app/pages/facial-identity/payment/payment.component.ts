import { Component, OnInit } from '@angular/core';
import { FacialIdentityConstant, } from '../../../properties/facial-identity.constant';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {

  DOM_CONSTANTS = FacialIdentityConstant.PAYMENT;
  BTN = FacialIdentityConstant.BTN;
  constructor() { }

  ngOnInit() {}

}

