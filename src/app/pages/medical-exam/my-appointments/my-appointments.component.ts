import { Component, OnInit } from '@angular/core';
import { AppointmentsConstant, } from '../../../properties/appointments.constant';
import { Router } from '@angular/router';
import { AppointmentsService } from 'src/app/services/appointments.service';

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.scss'],
})
export class MyAppointmentsComponent implements OnInit {

  DOM_CONSTANTS = AppointmentsConstant.APPT;
  BTN = AppointmentsConstant.BTN;
  schdData: any;
  docApptsData: any;
  constructor(private router: Router, private apptService: AppointmentsService) { }

  ngOnInit() {
    this.schdData = this.getScheduleDetails();
    this.docApptsData = this.getDocAppts();
  }
  goToSchedule() {
    this.router.navigate(['/medical-exam']);
  }
  getScheduleDetails() {
    this.schdData = this.apptService.getApptScheduleDetails();
  }
  getDocAppts() {

  }
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
}

