import { Component, OnInit } from '@angular/core';
import { MedicalExamConstants } from 'src/app/properties/medical-exam.constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule-medical-exam',
  templateUrl: './schedule-medical-exam.component.html',
  styleUrls: ['./schedule-medical-exam.component.scss'],
})
export class ScheduleMedicalExamComponent implements OnInit {
  DOM_CONSTATNTS = MedicalExamConstants.MEDICAL_EXAM;


  constructor( private router: Router) { }

  ngOnInit() {}
  goToNext() {
    this.router.navigate(['medical-exam/sechdule-appointment']);
    //email calender
  }

  gotoHomePage() {
    this.router.navigate(['/home']);
  }
}
