import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MedicalExamConstants } from 'src/app/properties/medical-test.constant';
import { MatSelectChange } from '@angular/material';
import { SchedularCustomDirective } from './schedular.validator';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { Appointments } from 'src/app/models/appointments.model';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-clinic',
  templateUrl: './book-clinic.component.html',
  styleUrls: ['./book-clinic.component.scss'],
  providers: [DatePipe]
})
export class BookClinicComponent implements OnInit {
  selectedDate = new Date();
  startAt = new Date();
  minDate = new Date();
  date: any;
  selectedTime: any;
 name: string;
  DOM_CONSTATNTS = MedicalExamConstants.Schedule_CALANDER;
  availTimeslot = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '13:00 PM'];
  backendData = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '13:00 PM']; // Data from the backend
  appointmentTimeslots = [];
  disabled = false;


  constructor(private fb: FormBuilder, private apptService: AppointmentsService, private datePipe: DatePipe) {
    this.onSelect(this.datePipe.transform(this.selectedDate, 'dd MMMM yyyy'));
  }
  onSelect(event) {
    this.selectedDate = event;
  }

  ngOnInit() {
    this.backendData.forEach(e => {
      const text = this.getTextFromValue(e);
      this.appointmentTimeslots.push({ value: e, text });
    });
    console.log('timeSlot>>>', this.appointmentTimeslots);
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
  setApptDetails(date?: string, time?: string) {
    this.apptService.setScheduleDetails(this.datePipe.transform(this.selectedDate, 'dd MMMM yyyy'), this.selectedTime);
  }
  // To select the avialabel appointment
  onChangedSort(event: MatSelectChange) {
    this.selectedTime = event.value;
    if (this.availTimeslot.indexOf(event.value) !== -1) {
      console.log("selected Date",this.selectedDate);
      console.log("selcted Time",this.selectedTime);
      this.setApptDetails();
    }
  }
}
