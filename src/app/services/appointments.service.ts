import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Appointments } from '../models/appointments.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  apptDetails: Appointments = {};
  docApptDerails = {};
  constructor(private http: HttpClient) { }

  setLocation(location: string) {
    this.apptDetails.location = location;
  }
  setScheduleDetails(date: string, time: string) {
    this.apptDetails.date = date;
    this.apptDetails.time = time;
  }
  getApptScheduleDetails(): Appointments {
    console.log('returning the value', this.apptDetails);
    return this.apptDetails;
  }
}



