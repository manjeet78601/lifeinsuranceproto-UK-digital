import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schdule-booked',
  templateUrl: './schdule-booked.component.html',
  styleUrls: ['./schdule-booked.component.scss'],
})
export class SchduleBookedComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {}
  goToNext() {
    this.router.navigate(['/medical-exam/email-appt']);
    //email calender
  }

}
