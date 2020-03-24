import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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

  getUsersList() {
    return this.users;
  }

  getUser(id: number) {
    return this.users.find(data => data.id === id);
  }


  quotes = [
    {
      productId: 1,
      prodImg: './../../../../assets/img/dummy.jpg',
      quoteHeader: 'Quote Details',
      quoteDetails: 'This plan includes the best life insurance for anyone who needs flexible term policies. ',
      customerRatings: [
        {
          id: 1,
          name: 'Matt',
          ratings: 3
        },
        {
          id: 2,
          name: 'George',
          ratings: 4
        }
      ]
    },
    {
      productId: 2,
      prodImg: './../../../../assets/img/dummy.jpg',
      quoteHeader: 'Quote Details',
      quoteDetails: 'This plan includes the best life insurance for anyone who needs flexible term policies.  ',
      customerRatings: [
        {
          id: 1,
          name: 'John',
          ratings: 3
        },
        {
          name: 'Victor',
          ratings: 2
        }
      ]
    }
  ];

  getQuoteList() {
    return this.quotes;
  }
}
