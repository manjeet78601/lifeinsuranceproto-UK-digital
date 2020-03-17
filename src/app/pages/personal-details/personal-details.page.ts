import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataAnalyticsService, CategoryName, PageName, Action, PersonalDetailLabel } from 'src/app/services/data-analytics.service';


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
  data: any;
  isLoading = true;
  // tslint:disable-next-line:no-string-literal
  id = this.actRoute.snapshot.params['id'];

  constructor(
    private router: Router,
    private userService: UserService,
    private actRoute: ActivatedRoute,
    private snackbar: MatSnackBar,
    private dataAnalytics: DataAnalyticsService
  ) { }

  ngOnInit() {

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);

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
    if (this.id !== 0) {
      this.data = this.getUser();
      this.personalInfoForm.patchValue({
        fname: this.data.personalDetails.fname,
        email: this.data.personalDetails.email,
        dob: new Date(this.data.personalDetails.dob),
        gender: this.data.personalDetails.gender
      });
    }

  }

  getUser() {
    const id = Math.floor((Math.random() * 2) + 1);
    return this.userService.getUser(id);
  }

  goNext(state) {
    if (state === 1) {
      this.dataAnalytics.trackAnalyticData(CategoryName.PERSONLINFO, Action.CLICK, PersonalDetailLabel.NEXT);
      this.state = state + 1;
    } else {
      this.router.navigate(['./health-details']);
    }

  }

  goBack(state) {
    if (state === 2) {
      this.state = state - 1;
    } else {
      this.router.navigate(['/facial-identity']);
    }

  }

  getDOB() {
    const selectedDate = this.personalInfoForm.value.dob;
    const today = new Date();
    const dateBefore18Years = new Date(today.getFullYear() - 18, today.getMonth() - 1, today.getDate());


    if ( selectedDate > today ) {
      this.openSnackBar('Seems like you are not born yet, Please get back to us once you will be 18 !', null);
      this.personalInfoForm.controls.dob.setValue('');
      return false;
    } else if ((selectedDate < today) && (selectedDate > dateBefore18Years)) {
      this.openSnackBar('Seems like you are minor, See you soon on your 18th birthday !', null);
      this.personalInfoForm.controls.dob.setValue('');
      return false;
    } else {
      return true;
    }
  }

  openSnackBar(message, action = null) {
    this.snackbar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top'
    });
  }

}
