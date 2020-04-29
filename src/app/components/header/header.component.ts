import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { MenuService } from 'src/app/services/menu.service';
import { NavigationMenu } from 'src/app/models/navigation.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  profileImgIcon = '';
  navigateBeforeSignin$: Observable<NavigationMenu[]>;
  navigateAfterSignin$: Observable<NavigationMenu[]>;
  constructor(private menu: MenuController, private navigationService: MenuService, private auth: AuthService) { }
  ngOnInit() {
    this.getProfileImage();
    this.menu.enable(true, 'beforeLogin');
    this.navigateBeforeSignin$ = this.navigationService.getNavigationMenuBeforeSignin();
    this.navigateAfterSignin$ = this.navigationService.getNavigationMenuAfterSignin();
  }
  getProfileImage() {
    this.auth.subj.subscribe( img => {
      if (typeof img !== 'object') {
        this.profileImgIcon = img;
      }
    });
  }
}
