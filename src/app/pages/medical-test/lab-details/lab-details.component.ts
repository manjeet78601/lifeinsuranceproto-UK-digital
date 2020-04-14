import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentsConstant, } from '../../../properties/appointments.constant';
import { AppointmentsService } from 'src/app/services/appointments.service';

@Component({
  selector: 'app-lab-details',
  templateUrl: './lab-details.component.html',
  styleUrls: ['./lab-details.component.scss'],
})
export class LabDetailsComponent implements OnInit {
  DOM_CONSTANTS = AppointmentsConstant.APPT;
  BTN = AppointmentsConstant.BTN;
  schdData: any;
  schHeader: string;
  constructor(private router: Router, private apptService: AppointmentsService) { }

<<<<<<< HEAD
  constructor( private router: Router) { }
  goToNext() {
    this.router.navigate(['/medical-test/locate-clinic']);
=======
  ngOnInit() {
  }
  ionViewDidEnter() {
    this.DOM_CONSTANTS = AppointmentsConstant.APPT;
    this.schHeader = AppointmentsConstant.APPT.SCHD_HEADER;
    this.schdData = this.getScheduleDetails();
  }
>>>>>>> da57567a45315f91a3598cd919fd0e56e23c817d

  goToNext() {
    this.router.navigate(['/medical-test/locate-clinic']);
  }
  goToReschedule() {
    this.router.navigate(['/medical-test/locate-lab']);
  }
  getPrevious() {
    this.router.navigate(['/medical-test/book-lab']);
  }
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
  // Get Scheduled Appts
  getScheduleDetails() {
    this.apptService.setLocation('Quest Diagnostics');
    this.schdData = this.apptService.getApptScheduleDetails();
    if (Object.keys(this.schdData).length > 0) {
      AppointmentsConstant.APPT.SCH_DETAILS = AppointmentsConstant.APPT.SCH_DETAILS_BOOKED + this.schdData.location + ' for '
        + this.schdData.date + ' at ' + this.schdData.time;
    } else {
      AppointmentsConstant.APPT.SCH_DETAILS = AppointmentsConstant.APPT.SCHD_HEADER;
    }
  }
}
