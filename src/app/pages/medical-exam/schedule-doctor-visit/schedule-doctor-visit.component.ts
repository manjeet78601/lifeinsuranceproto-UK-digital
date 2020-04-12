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
import { Observable } from 'rxjs';

@Component({
  selector: 'app-schedule-doctor-visit',
  templateUrl: './schedule-doctor-visit.component.html',
  styleUrls: [
    './schedule-doctor-visit.component.scss'],
})

export class ScheduleDoctorVisitComponent implements OnInit {

  DaterForm: FormGroup;
  minFromDate = new Date();
  maxToDate = new Date().setDate(2);
  apptDetails: Observable<Appointments>;
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


  constructor(private fb: FormBuilder, private apptService: AppointmentsService) { }


  onSelect(event) {
    console.log('selected date>>', event);
    this.selectedDate = event;
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
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
  setAMorPM(no: string) {
    let time: number|string  =  parseInt(no);
    if (time >= 12) {
      time = (time - 12).toString() + '' + 'PM';
    } else if (time === 0) {
        time = '12am';
    } else if (time > 0 && time < 12) {
          time = time + 'am';
        }
    return time;
  }
  onclick(event) {
  }
  setApptDetails(date?: string, time?: string) {
    this.apptService.setScheduleDetails(this.selectedDate, this.selectedTime);
  }
  // To select the avialabel appointment
  onChangedSort(event: MatSelectChange) {
    this.selectedTime = event.value;
    if (this.availTimeslot.indexOf(event.value)) {
      this.setApptDetails();
    }
  }
}

