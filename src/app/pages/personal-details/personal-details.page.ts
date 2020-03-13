import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.page.html',
  styleUrls: ['./personal-details.page.scss'],
})
export class PersonalDetailsPage implements OnInit {

  state = 1;
  personalInfoForm: FormGroup;
  personalQuestForm: FormGroup;
  endDate: Date = new Date();
  constructor( private router: Router) { }

  ngOnInit() {
    this.personalInfoForm = new FormGroup(
      {
        fname: new FormControl('', [
          Validators.required
        ]),
        email: new FormControl('',
        [
          Validators.required,
          Validators.email
        ]),
        dob: new FormControl('',
        [
          Validators.required
        ]),
        gender: new FormControl('',
        [
          Validators.required
        ])
      }
    );

    this.personalQuestForm = new FormGroup(
      {
        isUsCitizen: new FormControl('', [
          Validators.required
        ]),
        haveSpouse: new FormControl('', [
          Validators.required
        ])
      }
    );
  }

  goNext(state) {
    if ( state === 1 ) {
      this.state = state + 1;
    } else {
      this.router.navigate(['./coverage-details']);
    }

  }

  goBack(state) {
    if ( state === 2 ) {
      this.state = state - 1;
    } else {
      this.router.navigate(['/facial-identity']);
    }

  }

}
