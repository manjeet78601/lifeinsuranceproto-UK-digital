import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.page.html',
  styleUrls: ['./personal-details.page.scss'],
})
export class PersonalDetailsPage implements OnInit {

  state = 1;

  constructor() { }

  ngOnInit() {
  }

  goNext(state) {
    this.state = state + 1;
  }

  goBack(state) {
    this.state = state - 1;
  }

}
