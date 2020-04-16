import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headsup-account',
  templateUrl: './headsup-account.component.html',
  styleUrls: ['./headsup-account.component.scss'],
})
export class HeadsupAccountComponent implements OnInit {
  headsupAcctForm: FormGroup = this.formBuilder.group({
    userName: ['', [Validators.required, Validators.email]],
    pwd: ['', Validators.required]
  });
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<HeadsupAccountComponent>, private router: Router) { }

  ngOnInit() {}
  onFormsubmit() {
    let pName: string;
    this.closeDialog();
    if (this.router.url.indexOf('health') !== -1) {
      pName = 'health';
    }
    this.router.navigate(['/home/esign'], { queryParams: { page: pName } });
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
