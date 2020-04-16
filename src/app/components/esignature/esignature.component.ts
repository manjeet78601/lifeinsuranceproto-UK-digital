import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-esignature',
  templateUrl: './esignature.component.html',
  styleUrls: ['./esignature.component.scss'],
})
export class EsignatureComponent implements OnInit {
  pageName: string;
  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {}
  ionViewDidEnter() {
    this.activeRoute.queryParams.subscribe((data) => {
      this.pageName = data.page || '';
    });
  }
  onESign() {
    this.router.navigate([`/home/${this.pageName}`], { queryParams: { esign: 'verified' } });
  }
  onCancel() {
    this.router.navigate([`/home/${this.pageName}`], { queryParams: { esign: 'notverified' } });
  }
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
}
