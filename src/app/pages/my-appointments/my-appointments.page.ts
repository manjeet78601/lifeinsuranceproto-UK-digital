import { Component, OnInit } from '@angular/core';
import { AppointmentsConstant, } from '../../properties/appointments.constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.page.html',
  styleUrls: ['./my-appointments.page.scss'],
})
export class MyAppointmentsPage implements OnInit {

  DOM_CONSTANTS = AppointmentsConstant.APPT;
  BTN = AppointmentsConstant.BTN;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToSchedule() {
    this.router.navigate(['/medical-exam']);
  }
}

