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
<<<<<<< HEAD
    console.log("returning the value", this.apptDetails);
=======
    console.log('returning the value', this.apptDetails);
>>>>>>> a8a0b76a50d16fb6c7960f094dd3c21f4826432e
    return this.apptDetails;
  }
}



