import { Injectable } from '@angular/core';
import { Profile } from '../pages/auth/auth.constant';
import { of, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
userInfo: Profile = {userName: '', userBdate: ''};
bDate: string;
  constructor() { }
  setUsername(name: string) {
    this.userInfo.userName = name.substr(0, name.indexOf('@'));
    this.userInfo.userBdate = '02/21/1988';
    this.bDate = '02/21/1988';
  }
  getUsername() {
    return this.userInfo;
  }
}
