import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-health-details',
  templateUrl: './health-details.page.html',
  styleUrls: ['./health-details.page.scss'],
})
export class HealthDetailsPage implements OnInit {

  state = 1;
  basicHealthDetailsForm: FormGroup;
  medicationListForm: FormGroup;
  moreMedicalInfoForm: FormGroup;
  section4Form: FormGroup;
  completeMedicalProfileForm: FormGroup;
  medicationList: Array<string> = ['Alcohol abuse', 'Anxiety', 'Asthma',
    'Cancer', 'Depression', 'Diabetes', 'Drug abuse', 'Heart attack', 'High blood pressure', 'High cholesterol',
    'Sleep apnea', 'Stroke', 'Other serious conditions', 'None of these apply to me'];

  checkboxArray: Array<string> = [];
  constructor(
    private router: Router
  ) {
    this.basicHealthDetailsForm = new FormGroup(
      {
        height: new FormControl('', [Validators.required]),
        weight: new FormControl('', [Validators.required]),
        usedTobacco: new FormControl('', [Validators.required]),
        usedMarijuana: new FormControl('', [Validators.required])
      }
    );

    this.section4Form = new FormGroup({
      parentHavingAttack: new FormControl('', [Validators.required]),
      haveDriverLicense: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }
  getCheckboxValue = function(event) {
    if (event.checked) {
      this.checkboxArray.push(event.value);
    } else {
      this.checkboxArray.pop();
    }
  };

  goNext(state) {
    if (state !== 4 ) {
      this.state = state + 1;
    } else {
      this.router.navigate(['coverage-details']);
    }

  }
  goBack(state) {
    if (state !== 1) {
      this.state = state - 1;
    } else {
      this.router.navigate(['/personal-details/1']);
    }
  }
}
