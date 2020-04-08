import { Component, OnInit } from '@angular/core';
import { FacialIdentityConstant, } from '../../../properties/facial-identity.constant';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-compliance',
  templateUrl: './compliance.component.html',
  styleUrls: ['./compliance.component.scss'],
})
export class ComplianceComponent implements OnInit {

  DOM_CONSTANTS = FacialIdentityConstant.COMPLIANCE;
  BTN = FacialIdentityConstant.BTN;
  complianceForm: FormGroup;
  constructor(private router: Router) {
    this.complianceForm = new FormGroup(
      {
        name: new FormControl('', [Validators.required])
      });
  }
  ngOnInit() { }
  addCard() {
    this.router.navigate(['/facial-identity/payment']);
  }
}
