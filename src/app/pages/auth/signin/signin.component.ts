import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { properties } from '../auth.constant';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  htmlText = properties;
  loginForm: FormGroup = this.formBuilder.group({
    lname: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit() {}
  onFormsubmit(formName: string) {
    this.router.navigate(['/auth/profile']);
  }
  signup(event) {
    this.router.navigate(['/auth/signup']);
  }
}
