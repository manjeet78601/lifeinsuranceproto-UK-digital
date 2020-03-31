import { Injectable } from '@angular/core';
import { Profile } from '../properties/auth.constant';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
financeURL =  '../../assets/json/profile/financial-details.json';
userInfo: Profile = {userName: '', userBdate: ''};
bDate: string;
  constructor(private http: HttpClient) { }
  setUsername(name: string) {
    this.userInfo.userName = name.substr(0, name.indexOf('@'));
    this.userInfo.userBdate = '02/21/1988';
    this.bDate = '02/21/1988';
  }
  getUsername() {
    return this.userInfo;
  }
  getUserFinancialDetails() {
    return this.http.get(this.financeURL);
  }
}
