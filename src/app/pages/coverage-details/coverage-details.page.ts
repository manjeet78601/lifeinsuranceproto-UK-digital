import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }
  goNext(state) {
    this.state = state + 1;
  }

  goBack(state) {
    this.state = state - 1;
  }
  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

}
