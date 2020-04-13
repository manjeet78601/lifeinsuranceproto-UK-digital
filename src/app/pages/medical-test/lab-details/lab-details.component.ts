import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lab-details',
  templateUrl: './lab-details.component.html',
  styleUrls: ['./lab-details.component.scss'],
})
export class LabDetailsComponent implements OnInit {

  constructor( private router: Router) { }
  goToNext() {
    this.router.navigate(['/medical-test/email-appt']);

  }
  ngOnInit() {}
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
}
