import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { MenuService } from 'src/app/services/menu.service';
import { NavigationMenu } from 'src/app/models/navigation.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navigate$: Observable<NavigationMenu[]>;
  constructor(private menu: MenuController, private navigationService: MenuService) { }
  ngOnInit() {
    this.navigate$ = this.navigationService.getNavigationMenus();
  }

}
