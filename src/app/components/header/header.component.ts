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
      title : 'Home',
      url   : '/home',
      icon  : 'home'
    },
    {
      title : 'Chat',
      url   : '/chat',
      icon  : 'chatboxes'
    },
    {
      title : 'Contacts',
      url   : '/contacts',
      icon  : 'contacts'
    },
  ];
  constructor(private menu: MenuController) { }
  ngOnInit() {}

}
