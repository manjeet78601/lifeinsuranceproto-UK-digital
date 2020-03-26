import { Component, OnInit } from '@angular/core';
import { HomeConstants, } from './../home.constants';
@Component({
  selector: 'app-compliance',
  templateUrl: './compliance.component.html',
  styleUrls: ['./compliance.component.scss'],
})
export class ComplianceComponent implements OnInit {

  DOM_CONSTANTS = HomeConstants.COMPLIANCE;
  constructor() { }

  ngOnInit() {}

}
