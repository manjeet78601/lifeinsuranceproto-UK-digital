import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { MatSelectChange } from '@angular/material';
import { AppointmentsService } from 'src/app/services/appointments.service';
@Component({
  selector: 'app-locate-clinic',
  templateUrl: './locate-clinic.component.html',
  styleUrls: ['./locate-clinic.component.scss'],
})
export class LocateClinicComponent implements OnInit {
  locations = ['Newton - CityMD', 'Chealsea - CityMD', 'Battery park - CityMD', 'New London - CityMD', 'West Haven - CityMD', 'Hartford - CityMD'];
  loc = 'Newton - CityMD';
  location: any;
  constructor(private router: Router, private loader: LoaderService, private clinicApptService: AppointmentsService) { }

  ngOnInit() {
    this.location = this.loc.split("-")[1].trim();
  }
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
  goToNext() {
    this.setClinicLocDetails(this.location);
    this.router.navigate(['/medical-test/book-clinic']);
  }

  setClinicLocDetails(loc: string) {
    this.clinicApptService.setClinicLocation(loc);
  }
  // To select loc of clinic
  onChangedLoc(event: MatSelectChange) {
    this.location = event.value.split("-")[1].trim();
    console.log('this.selectedClinic.value ::', this.location);
  }

}
