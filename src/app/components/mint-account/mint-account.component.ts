import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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
              public dialogRef: MatDialogRef<MintAccountComponent>, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {}
  onFormsubmit() {
    let pName;
    this.closeDialog();
    console.log('Route name: ' + this.router.url);
    if (this.router.url.indexOf('insurance-calculator') !== -1) {
      pName = 'insurance-calculator';
    }
    this.router.navigate(['/home/esign'], { queryParams: { page: pName } });
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
