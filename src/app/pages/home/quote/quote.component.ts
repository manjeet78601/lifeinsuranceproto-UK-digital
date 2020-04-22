import { Component, OnInit } from '@angular/core';
import { CompareQuotesConstant, } from '../../../properties/compare-quotes.constant';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MenuService } from 'src/app/services/menu.service';
import { AuthService } from 'src/app/services/auth.service';

// Datasource for table
export interface QuoteComparision {
  comparison: string;
  prudential: string;
  nyLife: string;
  massMutual: string;
  libertyMutual: string;
}

const ELEMENT_DATA: QuoteComparision[] = [
  { comparison: 'Monthly premium', prudential: '$25', nyLife: '$30', massMutual: '$35', libertyMutual: '$50' },
  { comparison: 'Policy Coverage', prudential: '$500k', nyLife: '$500k', massMutual: '$500k', libertyMutual: '$500k' },
  { comparison: 'Policy Duration', prudential: '10 years', nyLife: '20 years', massMutual: '30 years', libertyMutual: 'Whole life' },
  { comparison: 'Cash value', prudential: 'No', nyLife: 'No', massMutual: 'No', libertyMutual: 'Yes' },
];

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit {
  // Initialize expandable card to false
  collapse = [];
  DOM_CONSTANTS = CompareQuotesConstant.QUOTE;
  displayedColumns: string[] = ['comparison', 'prudential', 'nyLife', 'massMutual', 'libertyMutual'];
  dataSource = ELEMENT_DATA;
  BTN = CompareQuotesConstant.BTTN;
  quotes: any;
  isLoading = true;
  isUerLoggedIn: boolean;
  details: any;
  showHideDiv: boolean = false;
  constructor(
    private router: Router,
    private userService: UserService,
    private menuService: MenuService,
    private auth: AuthService
  ) {
    this.isUerLoggedIn = this.auth.isUserLoggedIn;
  }
  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
    this.quotes = this.getQuotes();
    this.auth.setQuotesGeneratedFlag();
    console.log(this.quotes);
  }
  onSlideClicked(value: any) {
    if (this.details === value.activeId) {
      this.showHideDiv = true;
    }
    else {
      this.showHideDiv = false;
      console.log(this.showHideDiv);
    }
  }
  showDetails(prodId) {
    this.details = prodId;
    console.log("prodId", prodId);

  }

  goToNext() {
    this.menuService.setCompletedMenu('Compare Quotes');
    this.userService.setQuotesCompleted();
    if (this.auth.isUserLoggedIn === true) {
      this.router.navigate(['/medical-test']);
    } else {
      this.router.navigate(['/auth/signup']);
    }
  }
  getQuotes() {
    return this.userService.getQuoteList();
  }
  createAccount() {
    return this.userService.createAccount();
  }
  getPrevious() {
    this.router.navigate(['/home/health']);
  }
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
}


