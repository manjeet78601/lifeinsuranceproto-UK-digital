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

}
