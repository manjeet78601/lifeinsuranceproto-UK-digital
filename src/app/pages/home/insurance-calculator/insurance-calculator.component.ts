import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeConstants } from '../../home/home.constants';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { AuthService } from 'src/app/services/auth.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MintAccountComponent } from 'src/app/components/mint-account/mint-account.component';
import { Observable } from 'rxjs';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-insurance-calculator',
  templateUrl: './insurance-calculator.component.html',
  styleUrls: ['./insurance-calculator.component.scss'],
})
export class InsuranceCalculatorComponent implements OnInit, OnDestroy {
  BTN = HomeConstants.BTN;
  PAGE_BOTTOM1 = HomeConstants.PAGE_BOTTOM1;
  PAGE_SUBTITLE = HomeConstants.PAGE_SUBTITLE;
  PAGE_HEADER = HomeConstants.LIFE_INSURANCE_HEADER;
  PAGE_SUB_HEADER = HomeConstants.LIFE_INSURANCE_SUB_HEADER;
  STEP1_BOTTOM = HomeConstants.STEP1_BOTTOM;
  BTTN = HomeConstants.BTTN;
  minDate = new Date();
  progress = 0;
  totalCoverage = 0;
  INSURANCE_CALCULATOR = HomeConstants.INSURANCE_CALCULATOR;
  isUerLoggedIn: boolean;
  isMintAccountVerified: string;
  routeSub: any;
  constructor(private router: Router, private navigationService: MenuService, private toast: ToastService,
              private auth: AuthService, public dialog: MatDialog, private activeRoute: ActivatedRoute, private authService: AuthService) {
    this.isUerLoggedIn = this.auth.isUserLoggedIn;
  }

  ngOnInit() { }
  ionViewDidEnter() {
    if (this.authService.isMinAccountLinked === false) {
      this.routeSub = this.activeRoute.queryParams.subscribe((data) => {
        this.isMintAccountVerified =  data.esign || 'showMintModal';
        if (this.isMintAccountVerified === 'showMintModal') {
          this.openDialog();
        }
        if (this.isMintAccountVerified === 'verified') {
          this.toast.presentToast('Intuit Mint account has been linked successfully');
          this.authService.isMinAccountLinked = true;
          this.prefillQuestions();
        }
      });
    } else {
      this.prefillQuestions();
    }
  }
  ionViewWillLeave() {
    this.routeSub.unsubscribe();
  }
  openDialog() {
    this.dialog.open(MintAccountComponent, {
      data: {
        accountName: 'mint'
      },
      closeOnNavigation : true,
      disableClose: true,
      minWidth: '90%',
      minHeight: '80%'
    });
  }
  prefillQuestions() {
    const valArr = [50000, 10, 10300, 10000, 800, 1500, 2800, 3000];
    this.INSURANCE_CALCULATOR.QUESTIONS.forEach((element, index) => {
      element.VALUE = valArr[index] || 0;
      element.isVisited = true;
    });
    this.calculateCoverage();
    this.trackProgressBar();
  }
  InsuranceBudget() {
    this.navigationService.setCompletedMenu('Life Insurance Calculator');
    this.router.navigate(['/home/budget']);

  }

  incrementProgress(progress) {
    if (this.progress < 100 && this.progress < progress) {
      this.progress = progress;
    }

  }

  calculateCoverage() {
    const annualIncome = this.INSURANCE_CALCULATOR.QUESTIONS[0].VALUE;
    const years = this.INSURANCE_CALCULATOR.QUESTIONS[1].VALUE;
    const debt = this.INSURANCE_CALCULATOR.QUESTIONS[2].VALUE;
    const childrensFuture = this.INSURANCE_CALCULATOR.QUESTIONS[3].VALUE;
    const funeraryCosts = this.INSURANCE_CALCULATOR.QUESTIONS[4].VALUE;
    const savings = this.INSURANCE_CALCULATOR.QUESTIONS[5].VALUE;
    const existingPolicy = this.INSURANCE_CALCULATOR.QUESTIONS[6].VALUE;
    const additionalAnnualIncome = this.INSURANCE_CALCULATOR.QUESTIONS[7].VALUE;

    const totalCoverage = (annualIncome * years)
      + debt + childrensFuture + funeraryCosts - savings - existingPolicy - additionalAnnualIncome;
    this.totalCoverage = totalCoverage > 0 ? totalCoverage : 0;

  }
  trackProgressBar() {
    const completedQuescount = this.INSURANCE_CALCULATOR.QUESTIONS.filter(data => {
      return !!data.VALUE;
    });
    this.progress = Math.floor(12.5 * completedQuescount.length);
  }
  createAccount() {
    this.router.navigate(['/auth/signup']);
  }
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}



