import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MedicalExamConstants } from 'src/app/properties/medical-exam.constant';
// import { Calendar } from '@ionic-native/calendar';
import {MatSelectChange } from '@angular/material';
import {ThemePalette} from '@angular/material/core';
import {SchedularCustomDirective} from './schedular.validator';
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
  picked_timeSlot: any;
  DOM_CONSTATNTS = MedicalExamConstants.Schedule_CALANDER;
    aval_timeslot = ['9:00 AM',  '10:00 AM', '11:00 AM', '12:00 PM',  '13:00 PM'];
  backendData = ['9:00 AM', '10:00 AM',  '11:00 AM',  '12:00 PM', '13:00 PM']; // Data from the backend
  appt_timeslots = [];
  disabled=false;
  // chip
  flag: any = false;
  name: string;
  chipColor: ThemePalette;

  constructor(private fb: FormBuilder, private apptService: AppointmentsService) { }
  selectedDate: any;
  events: string[] = [];

  onSelect(event) {
      console.log("selected date>>",event);
      this.selectedDate = event;
     this.setapt(this.selectedDate,'')
  }
   setapt(date?:any,time?:any){
    let x=date;
    console.log("dataesssss>>>",x);
    let y=time;
    console.log('timeeeeess>>>',y);
   }
    addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
      this.events.push(`${type}: ${event.value}`);
    }

    ngOnInit() {

      this.backendData.forEach(e => {
        const text = this.getTextFromValue(e);
        this.appt_timeslots.push({ value: e, text });
      });
      console.log('timeSlot>>>', this.appt_timeslots);
   }

    getTextFromValue(value: string) {

      const timeSlots = value.split('-');
      const formattedTime = timeSlots.map(time => {
        time = this.setAMorPM(time);
        return time;
      });

      const result = formattedTime.join('-');
      return result;
    }

    setAMorPM(no: string) {

      if (parseInt(no) > 12) {
        no = (parseInt(no) - 12).toString() + '' + 'PM';
      }
      else
      if (parseInt(no) == 0) {
          no = "12am"
      }
        else
          if (no[0] == '0') {
            no = no.slice(1);
            no += 'am';
          }

      return no;
    }
    setApp(){
     this.apptService;
    }
    // To select the avialabel appointment
      onChangedSort(event: MatSelectChange) {
        for (const item of this. aval_timeslot) {
          const name = item;
          const date = this.addEvent;
          if (name === event.value) {
            this.flag = true;
            this.disabled=true;
            console.log("flaggg>>",this.flag);
            console.log("current selected date>>>>>", this. selectedDate);
            console.log("exist",event.value);
            this.setapt('',event.value)
           this.apptService.setApptScheduleDetails=this.selectedDate
           
            break;
           }
        }
      }
}
