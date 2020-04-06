import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup = this.formBuilder.group({
    name: ['',  Validators.required],
    email: ['', [Validators.required, Validators.email]],
    note: ['', Validators.required]
  });
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {}
  onFormsubmit() {
  }
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
}
