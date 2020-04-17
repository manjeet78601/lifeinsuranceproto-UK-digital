import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { MatSelectChange } from '@angular/material';
import { AppointmentsService } from 'src/app/services/appointments.service';
@Component({
  selector: 'app-locate-lab-appointment',
  templateUrl: './locate-lab.component.html',
  styleUrls: ['./locate-lab.component.scss'],
})
export class LocateLabComponent implements OnInit {

  locations = ['Newton - Lab Corp', 'Chealsea - Lab Corp', 'Battery park - Quest Diagnostics',
    'New London - Quest Diagnostics', 'West Haven - Quest Diagnostics', 'Hartford - Lab Corp'];
  loc = 'Newton - Lab Corp';
  location: any;
  constructor(private router: Router, private loader: LoaderService, private labApptService: AppointmentsService) { }

  ngOnInit() {
    this.location = this.loc.split("-")[1].trim();
  }
  goToNext() {
    this.setLabLocDetails(this.location);
    this.router.navigate(['/medical-test/book-lab']);
  }

  setLabLocDetails(loc: string) {
    this.labApptService.setLocation(loc);
  }
  // To select loc of lab
  onChangedLoc(event: MatSelectChange) {
    this.location = event.value.split("-")[1].trim();
    console.log('this.selectedClinic.value ::', this.location);
  }
}
