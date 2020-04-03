import { Component, OnInit } from '@angular/core';
import { MedicalExamConstants } from 'src/app/properties/medical-exam.constant';

@Component({
  selector: 'app-schedule-medical-exam',
  templateUrl: './schedule-medical-exam.component.html',
  styleUrls: ['./schedule-medical-exam.component.scss'],
})
export class ScheduleMedicalExamComponent implements OnInit {
  DOM_CONSTATNTS = MedicalExamConstants.MEDICAL_EXAM;
  constructor() { }

  ngOnInit() { }

}
