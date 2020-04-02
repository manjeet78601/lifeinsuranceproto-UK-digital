import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { properties } from '../../../properties/auth.constant';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';
import { Signup } from 'src/app/models/auth.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  htmlText = properties;
  isSignup = false;
  isAccountVerified = false;
  signupForm: FormGroup = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    userName: ['', [Validators.required, Validators.email]],
    signupPwd: ['', Validators.required],
    location: ['', Validators.required],
    termsAndCond: ['', [Validators.required, Validators.requiredTrue]]
  });
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private loader: LoaderService) { }

  ngOnInit() {
    this.isSignup = false;
    this.isAccountVerified = false;
  }
  onFormsubmit() {
    this.isSignup = true;
    this.isAccountVerified = true;
  }
  signin() {
    const signUpObj = new Signup(
      this.signupForm.controls.firstName.value,
      this.signupForm.controls.userName.value,
      this.signupForm.controls.signupPwd.value,
      this.signupForm.controls.location.value as string,
      '02/21/1988'
      );
    this.authService.signup(signUpObj).subscribe(() => {
      this.loader.showAutoHideLoader('', 1000);
      this.router.navigate(['/auth/signin']);
    }, (error) => {
      alert(error);
    });
    }
    gotoHomePage() {
      this.router.navigate(['/home']);
    }
}
