import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-mint-account',
  templateUrl: './mint-account.component.html',
  styleUrls: ['./mint-account.component.scss'],
})
export class MintAccountComponent implements OnInit {
  mintAcctForm: FormGroup = this.formBuilder.group({
    userName: ['', [Validators.required, Validators.email]],
    pwd: ['', Validators.required],
    rememberMe: ['', [Validators.required, Validators.requiredTrue]]
  });
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<MintAccountComponent>, private router: Router, private activeRoute: ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit() {}
  ionViewWillLeave() {
    this.closeDialog();
  }
  onFormsubmit() {
    let pName;
    this.closeDialog();
    this.authService.saveUserNameForSignup('emailId', this.mintAcctForm.controls.userName.value);
    if (this.router.url.indexOf('insurance-calculator') !== -1) {
      pName = 'home/insurance-calculator';
    }
    if (this.router.url.indexOf('otheracct') !== -1) {
      pName = 'auth/otheracct';
    }
    this.router.navigate(['/home/esign'], { queryParams: { page: pName, accountName: 'mintAccount' } });
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
