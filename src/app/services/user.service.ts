import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  financialBudget = [];
  constructor() { }

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
      prodImg: './../../../../assets/img/dummy.jpg',
      quoteHeader: 'Quote Details',
      quoteDetails: 'This plan includes the best life insurance for anyone who needs flexible term policies. ',
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
      prodImg: './../../../../assets/img/dummy.jpg',
      quoteHeader: 'Quote Details',
      quoteDetails: 'This plan includes the best life insurance for anyone who needs flexible term policies.  ',
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
    }
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
    for (const iterator of budgetList) {
      iterator.ADDITION = this.sum(iterator.QUESTIONS);
    }
    console.log(this.financialBudget);

  }

  sum(input) {
    if (toString.call(input) !== '[object Array]') {
      return false;
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
}
