import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { properties} from '../../../properties/auth.constant';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';
import { Signin } from 'src/app/models/auth.model';
import { MenuController } from '@ionic/angular';
import { MenuService } from 'src/app/services/menu.service';


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
  constructor(private menu: MenuController, private formBuilder: FormBuilder,
              private router: Router, private authService: AuthService,
              private loader: LoaderService, private navigationService: MenuService) { }

  ngOnInit() {}
  onFormsubmit(formName: string) {
    const loginObj = new Signin(this.loginForm.controls.lname.value, this.loginForm.controls.password.value);
    this.authService.login(loginObj).subscribe((data) => {
      this.menu.enable(true, 'afterLogin');
      this.loader.showAutoHideLoader('', 2000);
      if (this.authService.quotesGenerated === true) {
        this.router.navigate(['/medical-test']);
      } else {
        this.router.navigate(['/auth/profile']);
      }
    }, (error) => {
      alert(error);
    });
  }
  signup(event) {
    if (this.authService.isMinAccountLinked && this.authService.isHeadsUpAccountLinked) {
      this.router.navigate(['/auth/signup']);
    } else {
      this.router.navigate(['/auth/otheracct']);
    }
  }
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
}
