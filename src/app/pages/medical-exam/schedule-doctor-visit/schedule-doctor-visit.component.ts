import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule-doctor-visit',
  templateUrl: './schedule-doctor-visit.component.html',
  styleUrls: ['./schedule-doctor-visit.component.scss'],
})
export class ScheduleDoctorVisitComponent implements OnInit {
  timings = ['9:00 - AM' , '9:30 - AM' , '10:00 - AM' , '11:00 - AM' , '12:00 - PM' , '1:00 - PM'];

  selectedDate: any;
  // name = 'Angular 6';

  onSelect(event) {
    console.log(event);
    this.selectedDate = event;
  }
  // events: string[] = [];

  // addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  //   this.events.push(`${type}: ${event.value}`);
  // }
  constructor( private router: Router) { }
  goToNext() {
    this.router.navigate(['medical-exam/appointment-details']);
    //email calender
  }
  ngOnInit() {}

}
