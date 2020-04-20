import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { MedicalExamConstants } from 'src/app/properties/medical-test.constant';
import { MatSelectChange } from '@angular/material';
import { VERSION, MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { Appointments } from 'src/app/models/appointments.model';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-book-clinic',
  templateUrl: './book-clinic.component.html',
  styleUrls: ['./book-clinic.component.scss'],
  providers: [DatePipe],
 
})
export class BookClinicComponent implements OnInit {
  selectedDate: any;
  selectedTime: any;
  minDate = new Date();

  date: any;
  name: string;
  DOM_CONSTATNTS = MedicalExamConstants.Schedule_CALANDER;
  availTimeslot = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '13:00 PM'];
  backendData = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '13:00 PM']; // Data from the backend
  appointmentTimeslots = [];
  labData = this.clinicApptService.getApptScheduleDetails();
  constructor(private router: Router, private clinicApptService: AppointmentsService, private datePipe: DatePipe, private snackBar: MatSnackBar) { }
  onSelect(event) {
   this.selectedDate = this.datePipe.transform(event, 'dd MMMM yyyy');
    if (this.selectedDate < this.clinicApptService.apptDetails.date) {
      this.snackBar.open('Selected Date cannot be less than lab booked Date ', 'ok', {
        duration: 3000,
        panelClass: 'custom-css-class',
      });
}
    else{
      return this.selectedDate;
    }
  }

  myDateFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  ngOnInit() {
    this.backendData.forEach(e => {
      const text = this.getTextFromValue(e);
      this.appointmentTimeslots.push({ value: e, text });
    });
  }
  getTextFromValue(value: string) {
    const timeSlots = value.split(':');
    const formattedTime = timeSlots.map(time => {
      return this.setAMorPM(time);
    });
    const result = formattedTime.join('-');
    return result;
  }
  setAMorPM(slot: string) {
    let timeSlot = slot;
    if (parseInt(timeSlot) === 0) {
      timeSlot = '12am';
    }
    if (parseInt(timeSlot) > 12) {
      timeSlot = (parseInt(timeSlot) - 12).toString() + '' + 'PM';
    }
    return timeSlot;
  }
  setClinicApptDetails(clinicDate?: string, clinicTime?: string) {
    this.clinicApptService.setClinicSchedule(this.datePipe.transform(this.selectedDate, 'dd MMMM yyyy'),
      this.selectedTime);
  }
  // To select the avialabel appointment
  onChangedSort(event: MatSelectChange) {
    this.selectedTime = event.value;
    if (this.selectedDate === this.clinicApptService.apptDetails.date && this.selectedTime <= this.clinicApptService.apptDetails.time) {
      this.snackBar.open('Selected Time cannot be earlier than the lab booked time. ', 'ok', {
        duration: 3000,
        panelClass: 'custom-css-class',
      });
    }
    else {
      if (this.availTimeslot.indexOf(event.value) !== -1) {
        this.setClinicApptDetails();
      }
    }
  }


  goToNext() {

   this.router.navigate(['/medical-test/clinic-details']);
  }


  getPrevious() {
    this.router.navigate(['/medical-test/locate-clinic']);
  }
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
}
