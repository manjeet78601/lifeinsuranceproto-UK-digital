import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MedicalExamConstants } from 'src/app/properties/medical-exam.constant';
import { Calendar } from '@ionic-native/calendar';

@Component({
  selector: 'app-schdule-calender',
  templateUrl: './schdule-calender.component.html',
  styleUrls: ['./schdule-calender.component.scss'],
})
export class SchduleCalenderComponent implements OnInit {
  // rangesFooter = RangesFooter;
  DOM_CONSTATNTS = MedicalExamConstants.Schedule_CALANDER;
  backendData = ['9:00-9:30', '9:30-10:30', '10:30-11:30', '11:30-12:00', '12:00-12:30', '12:30-13:00',
    '13:00-13:30', '13:30-14:00', '14:00-14:30', '14:30-15:00', '15:00-15:30'] //Data from the backend
  appt_timeslots = []

  constructor() { }

  selectedDate: any;
  events: string[] = [];
  // name = 'Angular 6';

  onSelect(event) {
    console.log(event);
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
      number = (parseInt(number) - 12).toString() + 'pm';
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


}
