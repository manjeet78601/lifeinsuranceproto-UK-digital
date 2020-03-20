import { Component, OnInit } from '@angular/core';
import { HomeConstants, } from './../home.constants';
import { Router } from '@angular/router';

// Datasource for table
export interface TermInsComparision {
  term: number;
  comparison: string;
  perm: number;
  lifeplus: number;
}

const ELEMENT_DATA: TermInsComparision[] = [
  { comparison: 'Indefinite coverage', term: 0, perm: 1, lifeplus: 0 },
  { comparison: 'Cash value', term: 0, perm: 1, lifeplus: 1 },
  { comparison: 'Affordable', term: 1, perm: 0, lifeplus: 1 },
  { comparison: 'Refundable', term: 0, perm: 1, lifeplus: 1 },
  { comparison: 'Flexible contribution', term: 0, perm: 0, lifeplus: 1 }
];

@Component({
  selector: 'app-choose-plan',
  templateUrl: './choose-plan.component.html',
  styleUrls: ['./choose-plan.component.scss'],
})
export class ChoosePlanComponent implements OnInit {

  displayedColumns: string[] = ['comparison', 'term', 'perm', 'lifeplus'];
  dataSource = ELEMENT_DATA;
  // Initialize expandable card to false
  collapsedSec1 = true;
  collapsedSec2 = true;
  collapsedSec3 = true;
  DOM_CONSTANTS = HomeConstants.CHOOSE_PLAN;
  constructor(
    private router: Router
  ) { }
  ngOnInit() {

  }
  getMedical() {
    this.router.navigate(['/home/health']);
  }

}


