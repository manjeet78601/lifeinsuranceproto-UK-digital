import { Component, OnInit, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation/ngx';
import { LocationService } from 'src/app/services/location.service';

declare var google;
@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit, AfterContentInit {
  options: GeolocationOptions;
  currentPos: Geoposition;
  @ViewChild('mapElement', { static: true }) mapElement: ElementRef;
  map: any;
  constructor(private geolocation: Geolocation, private location: LocationService) { }

  ngOnInit() {
    this.location.getNearbyLocations()
    .subscribe(res => {
      console.log(res);
    });
  }

  ngAfterContentInit(): void {
  //  this.map = new google.maps.Map(this.mapElement.nativeElement, {
  //     center: {lat: -34.397, lng: 150.644},
  //     zoom: 8
  //  });

    this.geolocation.getCurrentPosition().then((resp) => {
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8,
         });
      const infoWindow = new google.maps.InfoWindow;
      const pos = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      };
      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found');
      infoWindow.open(this.map);
      this.map.setCenter(pos);
    }).catch(err => {
      console.log('Error while loading map', err);
    });
  }

}
