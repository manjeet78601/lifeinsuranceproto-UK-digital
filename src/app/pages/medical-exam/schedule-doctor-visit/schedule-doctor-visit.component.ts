import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MedicalExamConstants } from 'src/app/properties/medical-exam.constant';
// import { Calendar } from '@ionic-native/calendar';
import { MatSelectChange } from '@angular/material';
import { ThemePalette } from '@angular/material/core';
import { SchedularCustomDirective } from './schedular.validator';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { Appointments } from 'src/app/models/appointments.model';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-schedule-doctor-visit',
  templateUrl: './schedule-doctor-visit.component.html',
  styleUrls: ['./schedule-doctor-visit.component.scss'],
  providers: [DatePipe]
})

export class ScheduleDoctorVisitComponent implements OnInit{
  calendar: any;

  date: any;
  selectedDate: any;
  selectedTime: any;
  events: string[] = [];
  // chip
  flag: any = false;
  name: string;
  chipColor: ThemePalette;
  DOM_CONSTATNTS = MedicalExamConstants.Schedule_CALANDER;
  availTimeslot = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '13:00 PM'];
  backendData = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '13:00 PM']; // Data from the backend
  appointmentTimeslots = [];
  disabled = false;


  constructor(private fb: FormBuilder, private apptService: AppointmentsService,private datePipe: DatePipe) { }
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
  setAMorPM(number: string) {
    if (parseInt(number) > 12)
      number = (parseInt(number) - 12).toString() + '' + 'PM';
    else
      if (parseInt(number) == 0)
        number = "12am"
      else
        if (number[0] == '0') {
          number = number.slice(1);
          number += 'am';
        }
    return number;
  }
  setApptDetails(date?: string, time?: string) {
    this.apptService.setScheduleDetails(this.datePipe.transform(this.selectedDate,'dd MMMM yyyy'), this.selectedTime);
  }
  // To select the avialabel appointment
  onChangedSort(event: MatSelectChange) {
    this.selectedTime = event.value;
    console.log("befort the for loop selectedTIme>>", this.selectedTime);
    for (let i = 0; i < this.availTimeslot.length; i++) {
      var name = this.availTimeslot[i];
      if (name == event.value) {
        this.flag = true;
        console.log('exist', event.value);
        console.log('current selected date', this.datePipe.transform(this.selectedDate,'dd MMMM yyyy'));
        console.log('current selected time', this.selectedTime);
        this.setApptDetails();
        break;
      }
    }
  }
}

