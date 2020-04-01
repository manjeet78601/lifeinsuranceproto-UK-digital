import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-urgent-care',
  templateUrl: './urgent-care.page.html',
  styleUrls: ['./urgent-care.page.scss'],
})
export class UrgentCarePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  // createAccount() {
  //   this.router.navigate(['/auth/signup']);
  // }


}
