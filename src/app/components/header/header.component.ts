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
      url   : '/home/insurance-calculator'
    },
    {
      title : 'Financial Budget',
      url   : '/home/budget',
    },
    {
      title : 'choosing a plan',
      url   : 'home/chooseplan'
    },
    {
      title : 'Comparing Quotes',
      url   : 'home/health'
    },
    {
      title : 'Contact',
      url   : 'home/contact'
    },
    {
      title : 'Help',
      url   : 'home/help'
    },
    {
      title : 'Sign In',
      url   : '/auth'
    },
    {
      title : 'Location',
      url   : '/location'
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
