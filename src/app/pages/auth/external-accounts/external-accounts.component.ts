import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { HeadsupAccountComponent } from 'src/app/components/headsup-account/headsup-account.component';
import { MintAccountComponent } from 'src/app/components/mint-account/mint-account.component';

@Component({
  selector: 'app-external-accounts',
  templateUrl: './external-accounts.component.html',
  styleUrls: ['./external-accounts.component.scss'],
})
export class ExternalAccountsComponent implements OnInit, OnDestroy {
  routeSub: any;
  isMintAccountVerified: string;
  isBothAccountLinked: boolean;
  constructor(private router: Router, private activeRoute: ActivatedRoute , public dialog: MatDialog) { }

  ngOnInit() {}
  ionViewDidEnter() {
    this.isBothAccountLinked = false;
    this.routeSub = this.activeRoute.queryParams.subscribe((data) => {
      if (data && data.accountName && data.esign) {
        if (data.accountName === 'mintAccount' && data.esign === 'verified') {
          this.openHeadsUpAccountModal();
        }
        if (data.accountName === 'headsUpAccount' && data.esign === 'verified') {
          this.isBothAccountLinked = true;
        }
      }
    });
  }
  ionViewWillLeave() {
    this.routeSub.unsubscribe();
  }
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
  onCancel() {
    this.router.navigate(['/auth/signup']);
  }
  onLogIn() {
    this.openMintAccountModal();
  }
  onContinue() {
  }
  openMintAccountModal() {
    this.dialog.open(MintAccountComponent, {
      data: {
        accountName: 'mint'
      },
      closeOnNavigation : true,
      disableClose: true,
      minWidth: '90%',
      maxHeight: '600px'
    });
  }
  openHeadsUpAccountModal() {
    this.dialog.open(HeadsupAccountComponent, {
      data: {
        accountName: 'mint'
      },
      closeOnNavigation : true,
      disableClose: true,
      minWidth: '90%',
      maxHeight: '600px'
    });
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
