import { Component, OnInit } from '@angular/core';
import { MedicalExamConstants } from 'src/app/properties/medical-test.constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule-medical-test',
  templateUrl: './start-medical-test.component.html',
  styleUrls: ['./start-medical-test.component.scss'],
})
export class StartMedicalTestComponent implements OnInit {
  DOM_CONSTATNTS = MedicalExamConstants.MEDICAL_EXAM;


  constructor(private router: Router) { }

  ngOnInit() { }
  goToNext() {
    this.router.navigate(['medical-test/medical-lab']);
    // email calender
  }

  gotoHomePage() {
    this.router.navigate(['/home']);
  }
}
