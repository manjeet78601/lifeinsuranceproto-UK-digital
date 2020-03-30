import { AfterViewInit, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { properties, financialLists, Profile } from '../auth.constant';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';
import { DataAnalyticsService } from 'src/app/services/data-analytics.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, AfterViewInit {
  htmltext = properties;
  userInfo: any;
  birthDate: Date;
  userFinancialInfo: any;
  doughnutChartLabels = [
    'Home', 'Mortgage', 'Vehicle(s)', 'Valuables', 'Fixed Income'
  ];
  doughnutChartData = [12, 3, 4, 8, 19];
  doughnutChartType = 'doughnut';
  doughnutChartLegendColors = [{
    backgroundColor: [
      '#E03997',
      '#FFE622',
      '#767676',
      '#FF6D75',
      '#00B5AD'
    ]
  }];
  donutOptions: any = {
    legend: {
      display: true,
      position: 'right',
    }
  };

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.userInfo = this.auth.getUsername();
    this.birthDate = new Date(this.auth.bDate);
    const unsub = this.auth.getUserFinancialDetails().subscribe((data) => {
      this.userFinancialInfo = data;
    }, err => {
      console.log(err);
    });
  }
  ngAfterViewInit() { }
  ionViewDidLoad() { }

  trackByIndex(index, item) {
    return index;
  }
  trackQuesProgress(event, id: string | number) {
    const currentItem = this.userFinancialInfo.find((item) => item.id === id);
    currentItem.isAllQuestionsAnswered = currentItem.questions.every(data => {
      return !!data.value;
    });
  }
}
