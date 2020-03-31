import { AfterViewInit, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { properties, financialLists, Profile } from '../../../properties/auth.constant';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';
import { DataAnalyticsService } from 'src/app/services/data-analytics.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, AfterViewInit {
  @ViewChild('userFinancialAssets', {static: false}) userProfileChart: ElementRef;
  doughnutChart: Chart;
  htmltext = properties;
  userInfo: any;
  birthDate: Date;
  userFinancialInfo: any;
  progress = 0;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.userInfo = this.auth.getUsername();
    this.birthDate = new Date(this.auth.bDate);
    const unsub = this.auth.getUserFinancialDetails().subscribe((data) => {
      this.userFinancialInfo = data;
      this.drawUserProfile();
    }, err => {
      console.log(err);
    });
  }
  ngAfterViewInit() {}
  ionViewDidLoad() {}
  drawUserProfile() {
    this.doughnutChart = new Chart(this.userProfileChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Home', 'Mortgage', 'Vehicle(s)', 'Valuables', 'Fixed Income'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 3, 4, 8, 19],
            backgroundColor: [
              '#E03997',
              '#FFE622',
              '#767676',
              '#FF6D75',
              '#00B5AD'
            ],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB', '#FFCE56']
          }
        ]
      }
    });
  }
  trackByIndex(index, item) {
    return index;
  }
  trackQuesProgress(event, id: string | number) {
    const currentItem = this.userFinancialInfo.find((item) => item.id === id);
    currentItem.isAllQuestionsAnswered = currentItem.questions.every(data => {
      return !!data.value;
    });
    const completedQuescount = this.userFinancialInfo.filter(data => {
      return data.isAllQuestionsAnswered === true;
    });
    this.progress = Math.floor(16.7 * completedQuescount.length);
  }
}
