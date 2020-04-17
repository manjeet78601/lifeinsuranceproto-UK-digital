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
  clinicDetails: Appointments = {};
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

  // GET, SET Clinic details
  setClinicLocation(location: string) {
    this.clinicDetails.location = location;
  }
  setClinicSchedule(date: string, time: string) {
    this.clinicDetails.date = date;
    this.clinicDetails.time = time;
  }
  getClinicSchedule(): Appointments {
    console.log('returning the value', this.clinicDetails);
    return this.clinicDetails;
  }
}



