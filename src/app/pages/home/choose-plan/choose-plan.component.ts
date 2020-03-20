import { Component, OnInit } from '@angular/core';
import { HomeConstants, } from './../home.constants';

//Datasource for table
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
  //Initialize expandable card to false
  collapsedSec1 = true;
  collapsedSec2 = true;
  collapsedSec3 = true;
  //Constants
  PLAN_HEADER = HomeConstants.PLAN_HEADER;
  PLAN_SUB_HEADER = HomeConstants.PLAN_SUB_HEADER;
  TERM_INS_HEADER = HomeConstants.TERM_INS_HEADER;
  TERM_INS__EXPANSION_HEADER = HomeConstants.TERM_INS__EXPANSION_HEADER;
  TERM_INS__EXPANSION_BODY = HomeConstants.TERM_INS__EXPANSION_BODY;
  BTN = HomeConstants.PLAN_BTN;
  PERM_INS_HEADER = HomeConstants.PERM_INS_HEADER;
  PERM_INS__EXPANSION_HEADER = HomeConstants.PERM_INS__EXPANSION_HEADER;
  PERM_INS__EXPANSION_BODY = HomeConstants.PERM_INS__EXPANSION_BODY;
  LIFE_PLUS_HEADER = HomeConstants.LIFE_PLUS_HEADER;
  LIFE_PLUS_SUB_HEADER = HomeConstants.LIFE_PLUS_SUB_HEADER;
  LIFE_PLUS_EXPANSION_BODY = HomeConstants.LIFE_PLUS_EXPANSION_BODY;
  COMP_TBL_HEADER = HomeConstants.COMP_TBL_HEADER;
  STEP_FOUR_HEADER = HomeConstants.STEP_FOUR_HEADER;
  constructor() { }
  ngOnInit() {

  }

}


