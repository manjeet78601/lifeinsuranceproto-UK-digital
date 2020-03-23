import { Component, OnInit } from '@angular/core';
import { HomeConstants } from './../home.constants';
import { LoaderService } from 'src/app/services/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-health-questions',
  templateUrl: './health-questions.component.html',
  styleUrls: ['./health-questions.component.scss'],
})
export class HealthQuestionsComponent implements OnInit {

  DOM_CONSTANTS = HomeConstants.HEALTHQUESTIONS;
  PAGE_HEADER = HomeConstants.HEALTH_HEADER;
  PAGE_SUBHEADER = HomeConstants.HEALTH_SUB_HEADER;
  PAGE_LINE = HomeConstants.HEALTH_LINE;
  BTN = HomeConstants.BTN;
  progress = 0;
  constructor(
    private loader: LoaderService,
    private router: Router
  ) { }

  ngOnInit() {}

  
  incrementProgress(progress) {
    if (this.progress < 100 && this.progress < progress) {
      this.progress = progress;
    }
  }
  submit() {
    this.loader.showAutoHideLoader('Please give us a few moments to check our compliance engine based on the state you live for regulatory adjustments. ', 3000);
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 3000);
  }

}
