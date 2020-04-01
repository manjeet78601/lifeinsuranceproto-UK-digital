import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { NavigationMenu } from '../models/navigation.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private http: HttpClient) { }
  navigate: NavigationMenu[];
  menuURL: string;
  getNavigationMenus(flag): Observable<NavigationMenu[]> {
    if (flag === 'beforeSignin') {
      this.menuURL = './../../assets/json/menu/beforeLoginNavigation.json';
    } else {
      this.menuURL = './../../assets/json/menu/afterLoginNavigation.json';
    }
    return this.http.get<NavigationMenu[]>(this.menuURL)
      .pipe(
        map(res => {
          return this.navigate = res;
        }
        )
      );

  }

  setCompletedMenu(pageName: string) {
    // tslint:disable-next-line:prefer-for-of
    for (let index = 0; index < this.navigate.length; index++) {
      this.navigate[index].isCompleted = this.navigate[index].title === pageName ? true : this.navigate[index].isCompleted;
    }
  }
}
