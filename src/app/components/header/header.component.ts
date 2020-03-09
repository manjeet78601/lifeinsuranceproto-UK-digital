import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navigate = [
    {
      title : 'Personal Details',
      url   : '/personal-details',
      icon  : 'home'
    },
    {
      title : 'Health Details',
      url   : '/health-details',
      icon  : 'home'
    },
    {
      title : 'Login',
      url   : '/auth',
      icon  : 'home'
    },
    {
      title : 'Facial-Identity',
      url   : '/facial-identity',
      icon  : 'home'
    },
  ];
  constructor(private menu: MenuController) { }
  ngOnInit() {}

}
