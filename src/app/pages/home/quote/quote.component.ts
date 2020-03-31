import { Component, OnInit } from '@angular/core';
import { CompareQuotesConstant, } from '../../../properties/compare-quotes.constant';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

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
  constructor(
    private router: Router,
    private userService: UserService
  ) { }
  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
    this.quotes = this.getQuotes();
    console.log(this.quotes);
  }

  getMedicalExam() {
    this.router.navigate(['/home/medical-exam']);
  }
  getQuotes() {
    return this.userService.getQuoteList();
  }
  createAccount() {
    return this.userService.createAccount();
  }
}

