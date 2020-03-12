import { Component, OnInit, ViewChild } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
// import {} from 'google-maps';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

declare var google;
@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  @ViewChild('map', { static: true }) mapElement;
  map: any;
  pois: any[];
  infowindow: any;

  constructor(
    private locationService: LocationService,
    private router: Router,
    public platform: Platform
  ) {
  }
  ngOnInit(): void {
    this.initMap();
  }

initMap() {
    let service;
    const sydney = new google.maps.LatLng(40.714, -74.012);

    this.infowindow = new google.maps.InfoWindow();

    this.map = new google.maps.Map(
        this.mapElement.nativeElement, {center: sydney, zoom: 15});

    const request = {
      query: 'life insurance in zipcode 10286',
      fields: ['name', 'geometry'],
    };
    service = new google.maps.places.PlacesService(this.map);

    service.findPlaceFromQuery(request, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < results.length; i++) {
              this.createMarker(results[i]);
            }
            console.log(results);
            this.map.setCenter(results[0].geometry.location);
          }
        });
      }
      createMarker(place) {
        const marker = new google.maps.Marker({
          map: this.map,
          position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
          this.infowindow.setContent(place.name);
          this.infowindow.open(this.map, this);
        });
      }


  // searchZipCode(zipCode): void {
  //   const selectedZipCode = this.locationService.getCoordsByZipCode(
  //     parseInt(zipCode)
  //     );
  //   console.log(selectedZipCode);
  //   this.initMap(selectedZipCode);
  // }

  // initMap(zipObj): void {
  //   const coords = new google.maps.LatLng(zipObj.lat, zipObj.long);
  //   const mapOptions: google.maps.MapOptions = {
  //     center: coords,
  //     zoom: 12,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   };

  //   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  //   // tslint:disable-next-line:prefer-const
  //   let marker: google.maps.Marker = new google.maps.Marker(
  //      {
  //       maps: this.map,
  //       position: coords
  //     });
  //   marker.setMap(this.map);
  // }

    navigateToNextPage(): void {
    this.router.navigate(['/facial-identity']);
  }
}
