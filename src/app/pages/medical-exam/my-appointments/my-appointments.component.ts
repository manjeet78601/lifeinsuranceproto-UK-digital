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
  schHeader: string;
  constructor(private router: Router, private apptService: AppointmentsService) { }

  ngOnInit() {
    this.schHeader = AppointmentsConstant.APPT.SCHD_HEADER;
    this.schdData = this.getScheduleDetails();
  }
  goToSchedule() {
    this.router.navigate(['/medical-exam']);
  }
  // Get Scheduled Appts
  getScheduleDetails() {
    this.schdData = this.apptService.getApptScheduleDetails();
    if (Object.keys(this.schdData).length === 0) {
      AppointmentsConstant.APPT.SCHD_HEADER = this.schHeader;
      AppointmentsConstant.APPT.SCH_DETAILS = '';
    } else {
      AppointmentsConstant.APPT.SCHD_HEADER = this.schdData.location;
      AppointmentsConstant.APPT.SCH_DETAILS = AppointmentsConstant.APPT.SCH_DETAILS + this.schdData.location + ' for '
        + this.schdData.date + ' at ' + this.schdData.time;
    }
  }
  // cancelling Appt
  cancelAppt() {
    this.apptService.apptDetails = {};
    this.getScheduleDetails();
  }

  gotoHomePage() {
    this.router.navigate(['/home']);
  }
}

