import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { NavigationMenu } from '../models/navigation.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private http: HttpClient, private auth: AuthService) { }
  navigateBeforeLogin: NavigationMenu[];
  navigateAfterLogin: NavigationMenu[];
  menuURL: string;
  getNavigationMenuBeforeSignin(): Observable<NavigationMenu[]> {
      this.menuURL = './../../assets/json/menu/beforeLoginNavigation.json';
      return this.http.get<NavigationMenu[]>(this.menuURL)
      .pipe(
        map(res => {
          this.navigateBeforeLogin = res;
          return this.navigateBeforeLogin;
        }
        )
      );
  }
  getNavigationMenuAfterSignin(): Observable<NavigationMenu[]> {
    this.menuURL = './../../assets/json/menu/afterLoginNavigation.json';
    return this.http.get<NavigationMenu[]>(this.menuURL)
    .pipe(
      map(res => {
        this.navigateAfterLogin = res;
        return this.navigateAfterLogin;
      }
      )
    );
}
  setCompletedMenu(pageName: string) {
    // const menuItem = this.navigate.find((item) => {
    //   return item.title === pageName;
    // });
    // menuItem.isCompleted = true;
    for (const item of this.navigateBeforeLogin) {
      if ( item.title === pageName) {
        item.isCompleted = true;
      }
    }
    for (const item of this.navigateAfterLogin) {
      if ( item.title === pageName) {
        item.isCompleted = true;
      }
    }
  }
}
