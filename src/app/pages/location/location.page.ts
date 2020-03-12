import { Component, OnInit, ViewChild, AfterContentInit, NgZone } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import {} from 'google-maps';

declare var google;
@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  @ViewChild('map', {static: true}) mapElement;
  map: any;

  constructor(private locationService: LocationService) {
  }
  ngOnInit() {

  }

  searchZipCode(zipCode) {
    const selectedZipCode = this.locationService.getCoordsByZipCode(parseInt(zipCode));
    console.log(selectedZipCode);
    this.initMap(selectedZipCode);
  }

  initMap(zipObj) {
    const coords = new google.maps.LatLng(zipObj.lat, zipObj.long);
    const mapOptions: google.maps.MapOptions = {
      center: coords,
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    const marker: google.maps.Marker = new google.maps.Marker(
       {
        maps: this.map,
        position: coords
      });
    marker.setMap(this.map);


  }
}
