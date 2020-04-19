import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  financialBudget: any = [];
  constructor(private router: Router, private http: HttpClient) { }

  users = [
    {
      id: 1,
      personalDetails: {
        fname: 'John Doe',
        email: 'johnDoe@xyz.com',
        dob: '02/08/1986',
        gender: 'male'
      },
      personalQuestions: {
        isUsCitizen: 'yes',
        haveSpouse: 'no'
      }
    },
    {
      id: 2,
      personalDetails: {
        fname: 'Leanne Graham',
        email: 'Sincere@april.biz',
        dob: '17/01/1990',
        gender: 'male'
      },
      personalQuestions: {
        isUsCitizen: 'no',
        haveSpouse: 'no'
      }
    }
  ];
  totalCalculatedBudget: [
    {
      TEXT: 'Monthly income',
      MIN: 10000,
      MAX: 100000,
      STEP: 10000,
      VALUE: 50000,
    },
    {
      TEXT: 'Monthly expenses',
      MIN: 10000,
      MAX: 100000,
      STEP: 10000,
      VALUE: 50000,
    },
    {
      TEXT: 'Assets',
      MIN: 10000,
      MAX: 100000,
      STEP: 10000,
      VALUE: 50000,
    },
    {
      TEXT: 'Liabilities',
      MIN: 10000,
      MAX: 100000,
      STEP: 10000,
      VALUE: 50000,
    },
  ];


  quotes = [
    {
      productId: 1,
      prodImg: './../../../../assets/img/quote-img.svg',
      quoteHeader: 'Quote Details',
      quoteDetails: 'This plan includes the best life insurance for anyone who needs flexible term policies.',
      custAvgRatings: 4,
      customerRatings: [
        {
          id: 1,
          name: 'Matt',
          ratings: 5,
          comment: 'Seriously love this plan!',
          timestamp: 'Today at 5:42PM'
        },
        {
          id: 2,
          name: 'George',
          ratings: 3,
          comment: 'Seriously love this plan!',
          timestamp: 'Today at 5:42PM'
        },
        {
          id: 3,
          name: 'Kelvin',
          ratings: 3,
          comment: 'Seriously love this plan!',
          timestamp: 'Today at 5:42PM'
        }

      ]
    },
    {
      productId: 2,
      prodImg: './../../../../assets/img/quote-img.svg',
      quoteHeader: 'Quote Details',
      quoteDetails: 'This plan includes the best life insurance for anyone who needs permanent life insurance policies.',
      custAvgRatings: 3,
      customerRatings: [
        {
          id: 8,
          name: 'John',
          ratings: 2,
          comment: 'Seriously love this plan!',
          timestamp: 'Today at 5:42PM'
        },
        {
          id: 9,
          name: 'Victor',
          ratings: 4,
          comment: 'Seriously love this plan!',
          timestamp: 'Today at 5:42PM'
        },
        {
          id: 10,
          name: 'Potter',
          ratings: 2,
          comment: 'Seriously love this plan!',
          timestamp: 'Today at 5:42PM'
        }
      ]
    },
    {
      productId: 3,
      prodImg: './../../../../assets/img/quote-img.svg',
      quoteHeader: 'Quote Details',
      quoteDetails: `This plan includes the best life insurance for anyone who needs flexible term
       policies with a cash payment at regular intervals.`,
      custAvgRatings: 3,
      customerRatings: [
        {
          id: 11,
          name: 'Michael',
          ratings: 2,
          comment: 'Seriously love this plan!',
          timestamp: 'Today at 5:42PM'
        },
        {
          id: 12,
          name: 'Victor',
          ratings: 4,
          comment: 'Seriously love this plan!',
          timestamp: 'Today at 5:42PM'
        },
        {
          id: 13,
          name: 'Potter',
          ratings: 2,
          comment: 'Seriously love this plan!',
          timestamp: 'Today at 5:42PM'
        }
      ]
    },
    {
      productId: 4,
      prodImg: './../../../../assets/img/quote-img.svg',
      quoteHeader: 'Quote Details',
      quoteDetails: 'This plan includes the best life insurance for anyone who needs simple term policies.',
      custAvgRatings: 3,
      customerRatings: [
        {
          id: 14,
          name: 'Mike',
          ratings: 2,
          comment: 'Seriously love this plan!',
          timestamp: 'Today at 5:42PM'
        },
        {
          id: 15,
          name: 'Louis',
          ratings: 4,
          comment: 'Seriously love this plan!',
          timestamp: 'Today at 5:42PM'
        },
        {
          id: 16,
          name: 'Potter',
          ratings: 2,
          comment: 'Seriously love this plan!',
          timestamp: 'Today at 5:42PM'
        }
      ]
    },

  ];

  getUsersList() {
    return this.users;
  }

  getUser(id: number) {
    return this.users.find(data => data.id === id);
  }

  getCalculatedBudget() {
    return this.financialBudget;
  }

  setCalculatedBudget(budgetList) {
    return this.http.get('assets/json/budget/budget.json')
      .pipe(
        map(res => {
          this.financialBudget = res;
          this.financialBudget.forEach(element => {
            switch (element.title) {
              case 'Monthly income':
                element.value = Math.round(this.getMonthlyIncome(budgetList) * 100) / 100;
                break;
              case 'Monthly expenses':
                element.value = Math.round(this.getMonthlyExpenses(budgetList) * 100) / 100;
                break;
              case 'Total assets':
                element.value = Math.round(this.getTotalAssets(budgetList) * 100) / 100;
                break;
              case 'Total Liabilities':
                element.value = Math.round(this.getTotalLiabillities(budgetList) * 100) / 100;
                break;
              default:
                break;
            }
          });
          console.log(this.financialBudget);

        })
      );
    console.log(this.getMonthlyIncome(budgetList));
    this.financialBudget = budgetList;
  }

  getMonthlyIncome(budgetList) {
    let totalSum = 0;
    for (const iterator of budgetList) {
      if (iterator.TYPE === 'Income') {
        totalSum = totalSum + this.sum(iterator.QUESTIONS);
      }
    }
    return totalSum / 12;
  }

  getMonthlyExpenses(budgetList) {
    let totalSum = 0;
    for (const iterator of budgetList) {
      if (iterator.TYPE === 'Expense') {
        totalSum = totalSum + this.sum(iterator.QUESTIONS);
      }
    }
    return totalSum;
  }
  getTotalAssets(budgetList) {
    let totalSum = 0;
    for (const iterator of budgetList) {
      if (iterator.TYPE === 'Assets') {
        totalSum = totalSum + this.sum(iterator.QUESTIONS);
      }
    }
    return totalSum;

  }
  getTotalLiabillities(budgetList) {
    let totalSum = 0;
    for (const iterator of budgetList) {
      if (iterator.TYPE === 'Liabillities') {
        totalSum = totalSum + this.sum(iterator.QUESTIONS);
      }
    }
    return totalSum;

  }

  sum(input): number {
    if (toString.call(input) !== '[object Array]') {
      return null;
    }
    let total = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < input.length; i++) {
      // tslint:disable-next-line:radix
      if (isNaN(parseInt(input[i].VALUE))) {
        continue;
      }
      total += Number(input[i].VALUE);
    }
    return total;
  }

  getQuoteList() {
    return this.quotes;
  }
  createAccount() {
    this.router.navigate(['/auth/signup']);
  }
}
