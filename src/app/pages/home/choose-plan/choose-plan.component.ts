import { Component, OnInit } from '@angular/core';
import { ChoosePlanConstant, } from '../../../properties/choose-plan.constant';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
// Datasource for table
export interface TermInsComparision {
  term: number;
  comparison: string;
  perm: number;
  var: number;
  lifeplus: number;
}

const ELEMENT_DATA: TermInsComparision[] = [
  { comparison: 'Indefinite coverage', term: 0, perm: 1, var: 1, lifeplus: 0 },
  { comparison: 'Cash value', term: 0, perm: 1, var: 1, lifeplus: 1 },
  { comparison: 'Affordable', term: 1, perm: 0, var: 0, lifeplus: 1 },
  { comparison: 'Refundable', term: 0, perm: 1, var: 1, lifeplus: 1 },
  { comparison: 'Variable contribution', term: 0, perm: 0, var: 0, lifeplus: 1 },
  { comparison: 'Investment option', term: 0, perm: 0, var: 1, lifeplus: 0 }
];

@Component({
  selector: 'app-choose-plan',
  templateUrl: './choose-plan.component.html',
  styleUrls: ['./choose-plan.component.scss'],
})
export class ChoosePlanComponent implements OnInit {

  displayedColumns: string[] = ['comparison', 'term', 'perm', 'var', 'lifeplus'];
  dataSource = ELEMENT_DATA;
  DOM_CONSTANTS = ChoosePlanConstant.CHOOSE_PLANS;
  BTN = ChoosePlanConstant.BTTN;
  isUerLoggedIn: boolean;
  constructor(
    private router: Router,
    private navigationService: MenuService,
    private auth: AuthService,
    private userService: UserService
  ) {
    this.isUerLoggedIn = this.auth.isUserLoggedIn;
   }
  ngOnInit() {

  }
  getInsCal() {
    this.navigationService.setCompletedMenu('Insurance 101');
    this.router.navigate(['/home/insurance-calculator']);
  }
  createAccount() {
    this.userService.createAccount();
  }
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
}


