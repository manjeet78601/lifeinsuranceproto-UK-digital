import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Appointments } from '../models/appointments.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  constructor(private http: HttpClient) { }

  apptDetails: Observable<Appointments>;
  docApptDerails = {};
  // setLocation(location: string) {
  //   this.apptDetails.location = location;
  // }
  // setScheduleDetails(date: string, time: string) {
  //   this.apptDetails.date = date;
  //   this.apptDetails.time = time;
  // }
  setApptScheduleDetails(apptData: Observable<Appointments>){
    this.apptDetails = apptData;
  }
  getApptScheduleDetails(): Observable<Appointments> {
    return this.apptDetails;
  }
}
