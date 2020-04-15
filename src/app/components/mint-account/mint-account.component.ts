import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
              public dialogRef: MatDialogRef<MintAccountComponent>) { }

  ngOnInit() {}
  onFormsubmit() {
    this.closeDialog();
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
