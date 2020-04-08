import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.scss'],
})
export class AppointmentDetailsComponent implements OnInit {

  constructor( private router: Router) { }
  goToNext() {
    this.router.navigate(['/medical-exam/email-appt']);

  }
  ngOnInit() {}
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
}
