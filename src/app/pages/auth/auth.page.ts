import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  loginForm: FormGroup;
  signupForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      lname: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.signupForm = this.formBuilder.group({
      signupName: ['', [Validators.required, Validators.email]],
      signupPwd: ['', Validators.required],
      signupconfirmPwd: ['', Validators.required]
    });
  }
  onFormsubmit(formName: string) {

  }
}
