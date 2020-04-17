import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
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
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { HeadsupAccountComponent } from 'src/app/components/headsup-account/headsup-account.component';

@Component({
  selector: 'app-health-questions',
  templateUrl: './health-questions.component.html',
  styleUrls: ['./health-questions.component.scss'],
})
export class HealthQuestionsComponent implements OnInit, OnDestroy {

   today = new Date();
   dateBefore18Years = new Date(this.today.getFullYear() - 18, this.today.getMonth() - 1, this.today.getDate());
  birthDate = new Date();
  birthdaterror = false;
  insuranceText: string;
  // DOM_CONSTANTS = HomeConstants.FINANCIALBUDGET;
  healthQuesForm: FormGroup;
  isLoading = true;
  panelOpenState = false;
  dob: Date;
  DOM_CONSTANTS = CompareQuotesConstant.HEALTH_PAGE;
  BTN = CompareQuotesConstant.BTTN;
  progress = 0;
  isUerLoggedIn: boolean;
  heightValue: any;
  weightValue: any;
  // height
  max = 12;
  min = 3;
  step = 1;
  tickInterval = 1;
  //
  // weight
  maxWeight = 1000;
  minWeight = 80;
  weightStep = 5;
  weightTickInterval = 1;
  isHeadsUpAccountVerified: string;
  routeSub: any;
  //
  constructor(
    private toast: ToastService,
    private formBuilder: FormBuilder,
    private loader: LoaderService,
    private router: Router,
    private auth: AuthService,
    private navigationService: MenuService,
    private userService: UserService,
    private actRoute: ActivatedRoute,
    private dataAnalytics: DataAnalyticsService,
    public dialog: MatDialog,
    private activeRoute: ActivatedRoute
  ) {
    this.isUerLoggedIn = this.auth.isUserLoggedIn;
  }

  ngOnInit() {
    console.log('dob is ' + this.dob);
  }
  ionViewDidEnter() {
    this.routeSub = this.activeRoute.queryParams.subscribe((data) => {
      this.isHeadsUpAccountVerified =  data.esign || 'showHeadsUpModal';
      if (this.isHeadsUpAccountVerified === 'showHeadsUpModal') {
        this.openDialog();
      }
      if (this.isHeadsUpAccountVerified === 'verified') {
        this.prefillQuestions();
      }
    });
  }
  ionViewWillLeave() {
    this.routeSub.unsubscribe();
  }
  openDialog() {
    this.dialog.open(HeadsupAccountComponent, {
      data: {
        accountName: 'headsup'
      },
      closeOnNavigation : true,
      disableClose: true,
      minWidth: '90%',
      maxHeight: '600px'
    });
  }
  prefillQuestions() {
    console.log('lod health questions');
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
    const dateBefore18Years = new Date(today.getFullYear() - 18, today.getMonth() - 1, today.getDate());


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
  updateHeight(event) {
    this.heightValue = event.value;
  }
  updateWeight(event) {
    this.weightValue = event.value;
  }
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
  getPrevious() {
    this.router.navigate(['/home/budget']);
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
