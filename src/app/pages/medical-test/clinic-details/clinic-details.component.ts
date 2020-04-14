import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentsConstant, } from '../../../properties/appointments.constant';
import { AppointmentsService } from 'src/app/services/appointments.service';

@Component({
  selector: 'app-clinic-details',
  templateUrl: './clinic-details.component.html',
  styleUrls: ['./clinic-details.component.scss'],
})
export class ClinicDetailsComponent implements OnInit {
  DOM_CONSTANTS = AppointmentsConstant.APPT;
  BTN = AppointmentsConstant.BTN;
  clinicData: any;
  schHeader: string;
  constructor(private router: Router, private apptService: AppointmentsService) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.DOM_CONSTANTS = AppointmentsConstant.APPT;
    this.schHeader = AppointmentsConstant.APPT.SCHD_HEADER;
    this.clinicData = this.getClinicDetails();
  }

  goToNext() {
    this.router.navigate(['/medical-test/email-appt']);
  }
  goToReschedule() {
    this.router.navigate(['/medical-test/locate-clinic']);
  }
  getPrevious() {
    this.router.navigate(['/medical-test/book-clinic']);
  }
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
  // Get Scheduled Clinic details
  getClinicDetails() {
    this.clinicData = this.apptService.getClinicSchedule();
    if (Object.keys(this.clinicData).length > 0) {
      AppointmentsConstant.APPT.SCH_DETAILS = AppointmentsConstant.APPT.SCH_DETAILS_BOOKED +
        this.clinicData.location + ' for ' + this.clinicData.date + ' at ' + this.clinicData.time;
    } else {
      AppointmentsConstant.APPT.SCH_DETAILS = AppointmentsConstant.APPT.SCHD_HEADER;
    }
  }
}


