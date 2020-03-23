import { Component, OnInit } from '@angular/core';
import { HomeConstants,  } from './../home.constants';
import { from } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ChatDialogComponent } from 'src/app/pages/home/landing/landing.component';

@Component({
  selector: 'app-financial-budget',
  templateUrl: './financial-budget.component.html',
  styleUrls: ['./financial-budget.component.scss'],
})
export class FinancialBudgetComponent implements OnInit {
  panelOpenState = false;
  DOM_CONSTANTS = HomeConstants.FINANCIALBUDGET;
  PAGE_HEADER = HomeConstants.BUDGET_HEADER;
  PAGE_SUBHEADER = HomeConstants.BUDGET_SUB_HEADER;
  BTN = HomeConstants.BTN;
  progress = 0;

  constructor(
    private loader: LoaderService,
    private router: Router,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
   // console.log(this.CONSTANTS.FINANCIALBUDGET);
  }
  openDialog(): void { 
    const dialogRef = this.dialog.open(ChatDialogComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  incrementProgress(progress) {
    if (this.progress < 100 && this.progress < progress) {
      this.progress = progress;
    }

  }

  calculateBudget() {
    this.loader.showAutoHideLoader('Fetching Details...', 3000);
    setTimeout(() => {
      this.router.navigate(['/home/total-budget']);
    }, 3000);
  }

}
