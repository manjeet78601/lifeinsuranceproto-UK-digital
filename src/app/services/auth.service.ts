import { Injectable } from '@angular/core';
import { Profile } from '../properties/auth.constant';
import { of, Observable, throwError, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Signup, Signin} from '../models/auth.model';

export interface ExternalAcct {
  name: string;
  emailId: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
financeURL =  '../../assets/json/profile/financial-details.json';
userInfo: Signup = new Signup('', '', '', '', '');
isLoggedIn = false;
isQuotesGenerated = false;
subj = new BehaviorSubject<any>('');
bDate: string;
isMinAccountLinked = false;
isHeadsUpAccountLinked = false;
exterAcctDetails: ExternalAcct = { name: '', emailId: ''};
  constructor(private http: HttpClient) { }
  login(loginObj: Signin): Observable<boolean> {
    if (loginObj.userName === this.userInfo.userName && loginObj.password === this.userInfo.password) {
      this.isLoggedIn = true;
      return  of(true);
    } else {
      return throwError('Invalid Credentials');
    }
  }
  logout(): Observable<boolean> {
    this.isLoggedIn = false;
    this.isMinAccountLinked = false;
    this.isHeadsUpAccountLinked = false;
    return of(true);
  }
  signup(user: Signup): Observable<boolean>  {
    for (const key in user) {
      if (user.hasOwnProperty(key)) {
         this.userInfo[key] = user[key];
      }
    }
    return of(true);
  }
  setQuotesGeneratedFlag() {
    this.isQuotesGenerated = true;
  }
  saveUserNameForSignup(key: string, val: string) {
    this.exterAcctDetails[key] = val;
    this.subj.next(this.exterAcctDetails);
  }
  get quotesGenerated() {
    return this.isQuotesGenerated;
  }
  get userName() {
    return this.userInfo.firstName;
  }
  get userBirthDate() {
    return this.userInfo.birthDate;
  }
  getUserFinancialDetails() {
    return this.http.get(this.financeURL);
  }
  get isUserLoggedIn() {
    return this.isLoggedIn;
  }
  setProfileImage(img: string) {
    this.subj.next(img);
  }
}
