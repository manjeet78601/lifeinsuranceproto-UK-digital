import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { properties } from '../auth.constant';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  htmlText = properties;
  isSignup = false;
  signupForm: FormGroup = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    userName: ['', Validators.required],
    signupPwd: ['', Validators.required],
    termsAndCond: ['', Validators.required]
  });
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private loader: LoaderService) { }

  ngOnInit() {}
  onFormsubmit() {
    this.isSignup = true;
  }
  signin() {
    this.loader.showAutoHideLoader('', 1000);
    this.router.navigate(['/auth/signin']);
  }
}
