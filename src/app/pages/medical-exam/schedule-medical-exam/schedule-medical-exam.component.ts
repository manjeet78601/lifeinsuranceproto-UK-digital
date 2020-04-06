import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule-medical-exam',
  templateUrl: './schedule-medical-exam.component.html',
  styleUrls: ['./schedule-medical-exam.component.scss'],
})
export class ScheduleMedicalExamComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {}
  goToNext() {
    this.router.navigate(['medical-exam/sechdule-appointment']);
    //email calender
  }

}
