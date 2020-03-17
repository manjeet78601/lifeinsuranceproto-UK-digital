import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coverage-details',
  templateUrl: './coverage-details.page.html',
  styleUrls: ['./coverage-details.page.scss'],
})
export class CoverageDetailsPage implements OnInit {
  state = 1;
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = true;
  step = 10;
  thumbLabel = true;
  value = 0;
  vertical = false;
  tickInterval = 1;
  coverageResponsePeriod =
  [
    'Need to be covered ASAP.',
    'Some time in the future.',
    'I’m not sure yet.'
    ];
  coveragePeriodArr = [
    '15 years',
    '20 years',
    '25 years',
    'Permanently'
  ];
  constructor( private router: Router) { }

  ngOnInit() {
  }
  goNext(state) {
    if (state !== 3) {
      this.state = state + 1;
    } else {
      this.router.navigate(['/quotation']);
    }

  }

  goBack(state) {
    if (state !== 1) {
      this.state = state - 1;
    } else {
      this.router.navigate(['/health-details']);
    }

  }
  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

}
