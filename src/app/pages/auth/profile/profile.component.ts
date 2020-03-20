import { Component, OnInit } from '@angular/core';
import { properties, financialLists } from '../auth.constant';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  htmltext = properties;
  userFinancialInfo: string[] = financialLists;
  constructor() { }

  ngOnInit() {}
  trackByIndex(index, item) {
    return index;
  }

}
