import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-esignature',
  templateUrl: './esignature.component.html',
  styleUrls: ['./esignature.component.scss'],
})
export class EsignatureComponent implements OnInit {
  pageName: string;
  accountName: string;
  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {}
  ionViewDidEnter() {
    this.activeRoute.queryParams.subscribe((data) => {
      this.pageName = data.page || '';
      this.accountName = data.accountName || '';
    });
  }
  onESign() {
    this.router.navigate([`/${this.pageName}`], { queryParams: { accountName: this.accountName, esign: 'verified' } });
  }
  onCancel() {
    this.router.navigate([`/${this.pageName}`], { queryParams: { accountName: this.accountName, esign: 'notverified' } });
  }
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
}
