import { Component, OnInit } from '@angular/core';
import { properties, financialLists, Profile } from '../auth.constant';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  htmltext = properties;
  userInfo: Profile;
  birthDate: Date;
  userFinancialInfo: string[] = financialLists;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.userInfo = this.auth.getUsername();
    this.birthDate = new Date(this.userInfo.userBdate);
  }
  trackByIndex(index, item) {
    return index;
  }

}
