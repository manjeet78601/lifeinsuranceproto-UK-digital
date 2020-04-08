import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MedicalExamConstants } from 'src/app/properties/medical-exam.constant';
//import { Calendar } from '@ionic-native/calendar';
import {MatSelectChange } from '@angular/material';
import {ThemePalette} from '@angular/material/core';
import {SchedularCustomDirective} from './schedular.validator';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { Appointments } from 'src/app/models/appointments.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-schedule-doctor-visit',
  templateUrl: './schedule-doctor-visit.component.html',
  styleUrls: ['./schedule-doctor-visit.component.scss'],
})
export class ScheduleDoctorVisitComponent implements OnInit {
  DaterForm : FormGroup;
  minFromDate= new Date();
  maxToDate = new Date().setDate(2);
  apptDetails: Observable<Appointments>;
  date:any;
  picked_timeSlot:any;
  DOM_CONSTATNTS = MedicalExamConstants.Schedule_CALANDER;
    aval_timeslot=['9:00 AM',  '10:00 AM', '11:00 AM', '12:00 PM',  '13:00 PM',
    ];
  backendData = ['9:00 AM', '10:00 AM',  '11:00 AM',  '12:00 PM', '13:00 PM',
   ] //Data from the backend
  appt_timeslots = []
  
  // setApptScheduleDetails(apptData: Observable<Appointments>){
  //   this.date=this.onSelect(event);
  //   this.picked_timeSlot=this.onChangedSort(event:mat).
  //   this.apptDetails = apptData;
  // }
  
  
  
  // chip
  flag : any = false;
  name: string;
  chipColor: ThemePalette;
  
  constructor(private fb:FormBuilder,private apptService: AppointmentsService) { }
  selectedDate: any;
  events: string[] = [];
   
  
  onSelect(event) {
      console.log("selected date>>",event);
     this.selectedDate = event;
     
    }
    addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
      this.events.push(`${type}: ${event.value}`);
    }
  
    ngOnInit() {
  
      this.backendData.forEach(e => {
        var text = this.getTextFromValue(e);
        this.appt_timeslots.push({ value: e, text: text });
      })
      console.log("timeSlot>>>", this.appt_timeslots);
   }
  
    getTextFromValue(value: string) {
  
      var timeSlots = value.split("-");
      var formattedTime = timeSlots.map(time => {
        time = this.setAMorPM(time);
        return time
      });
  
      var result = formattedTime.join("-")
      return result
    }
  
    setAMorPM(number: string) {
  
      if (parseInt(number) > 12)
        number = (parseInt(number) - 12).toString() +''+'PM';
      else
      if (parseInt(number) == 0)
          number = "12am"
        else
          if (number[0] == '0') {
            number = number.slice(1);
            number += 'am';
          }
  
      return number
    }
    // To select the avialabel appointment
      onChangedSort(event: MatSelectChange){
        for (let i = 0; i < this. aval_timeslot.length; i++) {
          var name = this. aval_timeslot[i];
          var date=this.addEvent;
          if (name == event.value) {
            this.flag = true;
            console.log("current selected date>>>>>", this.date);
            console.log("exist",event.value);
            break;
           }
        
        }
      }
      
}
