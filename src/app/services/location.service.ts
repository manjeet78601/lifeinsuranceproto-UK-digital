import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }
  zipCodes = [
    {
      zipCode: 48834,
      lat: 43.142,
      long: -85.049
    },
    {
      zipCode: 10286,
      lat: 40.714,
      long: -74.012
    },
    {
      zipCode: 32889,
      lat: 28.566,
      long: -81.261
    },
    {
      zipCode: 30328,
      lat: 33.932,
      long: -84.378
    }
  ];

  getCoordsByZipCode(zipCode) {
    const zip = this.zipCodes.find(res => res.zipCode === zipCode);
    console.log(zip);
    return zip;
  }

  getNearbyLocations() {
    return this.http
    // tslint:disable-next-line:max-line-length
    .get('https://maps.googleapis.com/maps/api/geocode/json?address=life+insurance+at+zip+10001,+Mountain+View,+CA&key=AIzaSyDySN_BbijfNYb0D2wuY-wSCm16v3CXLRE');
  }


}
