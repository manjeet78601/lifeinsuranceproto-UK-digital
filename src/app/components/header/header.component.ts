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
      title : 'Insurance calculator',
      url   : '/home/insurance-calculator',
      icon  : 'home'
    },
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
      title : 'Location',
      url   : '/location',
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
