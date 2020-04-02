import { Component, OnInit } from '@angular/core';
import { CompareQuotesConstant, } from '../../../properties/compare-quotes.constant';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MenuService } from 'src/app/services/menu.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss'],
})
export class QuoteComponent implements OnInit {

  // Initialize expandable card to false
  collapse = [];
  DOM_CONSTANTS = CompareQuotesConstant.QUOTE;
  BTN = CompareQuotesConstant.BTTN;
  quotes: any;
  isLoading = true;
  isUerLoggedIn: boolean;
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

  goToNext() {
    this.menuService.setCompletedMenu('Compare Quotes');
    if (this.auth.isUserLoggedIn === true) {
      this.router.navigate(['/medical-exam']);
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


