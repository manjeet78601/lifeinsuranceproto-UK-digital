import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { Calendar } from '@ionic-native/calendar';

@Component({
  selector: 'app-schdule-calender',
  templateUrl: './schdule-calender.component.html',
  styleUrls: ['./schdule-calender.component.scss'],
})
export class SchduleCalenderComponent implements OnInit {
  // rangesFooter = RangesFooter;


  constructor( ) { }
  timings = ['9:00 - AM' , '9:30 -  AM' , '10:00 - AM' , '11:00 - AM' , '12:00 - PM' , '1:00 - PM'];

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

  ngOnInit() {}


}
