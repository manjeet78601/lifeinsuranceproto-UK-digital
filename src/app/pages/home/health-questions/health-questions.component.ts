import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HomeConstants } from './../home.constants';
import { LoaderService } from 'src/app/services/loader.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataAnalyticsService, CategoryName, PageName, Action, PersonalDetailLabel } from 'src/app/services/data-analytics.service';
import { FormGroup, Validator, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';
import { CompareQuotesConstant, } from '../../../properties/compare-quotes.constant';

@Component({
  selector: 'app-health-questions',
  templateUrl: './health-questions.component.html',
  styleUrls: ['./health-questions.component.scss'],
})
export class HealthQuestionsComponent implements OnInit {
  today = new Date();
  // today1 = new Date();
   dateBefore18Years = new Date(this.today.getFullYear() - 18, this.today.getMonth() - 1, this.today.getDate());

   birthDate = new Date();
   birthdaterror = false;
   insuranceText: string;
   //DOM_CONSTANTS = HomeConstants.FINANCIALBUDGET;
  healthQuesForm: FormGroup;
  isLoading = true;
  panelOpenState = false;
  dob: Date;
  DOM_CONSTANTS = CompareQuotesConstant.HEALTH_PAGE;
  BTN = CompareQuotesConstant.BTTN;
  progress = 0;
  isUerLoggedIn: boolean;
  constructor(
    private toast: ToastService,
    private formBuilder: FormBuilder,
    private loader: LoaderService,
    private router: Router,
    private auth: AuthService,
    private navigationService: MenuService,
    private userService: UserService,
    private actRoute: ActivatedRoute,
    private dataAnalytics: DataAnalyticsService
  ) {
    this.isUerLoggedIn = this.auth.isUserLoggedIn;
  }

  ngOnInit() {
    console.log('dob is ' + this.dob);
  }

  Submit(healthQuesForm) {
    console.log(healthQuesForm);
    const totalbudget = [];
    this.navigationService.setCompletedMenu('Comparing Quotes');
    this.loader.showAutoHideLoader('Please give us a few moments..', 3000);
    setTimeout(() => {
      this.router.navigate(['/home/quote']);
    }, 2000);
  }
  createAccount() {
    this.router.navigate(['/auth/signup']);
  }

  getDOB(date) {
    const selectedDate = new Date(date);
    const today = new Date();
    const today1 = new date();
    const dateBefore18Years = new Date(today.getFullYear() - 18, today.getMonth() - 1, today.getDate());
    // const minDate = new Date(Date.now());
   // const  dateAfteryears = new Date(today.getFullYear() - 100, today.getMonth()-1,today.getDate());
//     this.minDate.setDate( this.minDate.getDate() );
// this.minDate.setFullYear( this.minDate.getFullYear() - 100 );

    if (date > today) {
      this.toast.presentToast('Seems like you are not born yet, Please get back to us once you will be 18 !');
      this.birthdaterror = true;
      return false;
    } else if ((date < today) && (date > dateBefore18Years)) {
      this.toast.presentToast('Seems like you are minor, See you soon on your 18th birthday !');
      this.birthdaterror = true;
      return false;
    } else {
      this.birthdaterror = false;
      return true;
    }
  }
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
  getPrevious() {
    this.router.navigate(['/home/budget']);
  }
}
