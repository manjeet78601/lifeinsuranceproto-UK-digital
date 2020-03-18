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

  locations = [
    { title: 'Pune', lat: 18.638519, lng: 73.795082, add: 'address 1' },
    { title: 'Chinchwad', lat: 18.629650, lng: 73.781517, add: 'address 2' }

  ];
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

    // -------------------1

    // this.geolocation.getCurrentPosition().then((resp) => {
    //   this.map = new google.maps.Map(this.mapElement.nativeElement, {
    //         center: {lat: -34.397, lng: 150.644},
    //         zoom: 8,
    //      });
    //   const infoWindow = new google.maps.InfoWindow;
    //   const pos = {
    //     lat: resp.coords.latitude,
    //     lng: resp.coords.longitude
    //   };
    //   infoWindow.setPosition(pos);
    //   infoWindow.setContent('Location found');
    //   infoWindow.open(this.map);
    //   this.map.setCenter(pos);
    // }).catch(err => {
    //   console.log('Error while loading map', err);
    // });
    // --------------- 2
    // const uluru = {lat: -25.363, lng: 131.044};
    // const map = new google.maps.Map(this.mapElement.nativeElement, {
    //   zoom: 4,
    //   center: uluru
    // });
    // const contentString = '<div id="content">' +
    //   '<div id="siteNotice">' +
    //   '</div>' +
    //   '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    //   '<div id="bodyContent">' +
    //   '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    //   'sandstone rock formation in the southern part of the ' +
    //   'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
    //   'south west of the nearest large town, Alice Springs; 450&#160;km ' +
    //   '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
    //   'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
    //   'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
    //   'Aboriginal people of the area. It has many springs, waterholes, ' +
    //   'rock caves and ancient paintings. Uluru is listed as a World ' +
    //   'Heritage Site.</p>' +
    //   '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
    //   'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
    //   '(last visited June 22, 2009).</p>' +
    //   '</div>' +
    //   '</div>';

    // const infowindow = new google.maps.InfoWindow({
    //     content: contentString
    //   });

    // const marker = new google.maps.Marker({
    //     position: uluru,
    //     map: map,
    //     title: 'Uluru (Ayers Rock)'
    //   });
    // marker.addListener('click', function() {
    //     infowindow.open(map, marker);
    //   });

    // -------------3
    const myOptions = {
      center: new google.maps.LatLng(18.545950, 73.888512),
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP

    };

    const map = new google.maps.Map(this.mapElement.nativeElement,
        myOptions);
    this.setMarkers(map, this.locations);
  }

  setMarkers(map, locations) {
    let marker, i;
    for (i = 0; i < locations.length; i++) {

 // tslint:disable-next-line:prefer-const
 let title = locations[i].title;
 // tslint:disable-next-line:prefer-const
 let lat = locations[i].lat;
 // tslint:disable-next-line:prefer-const
 let long = locations[i].lng;
 // tslint:disable-next-line:prefer-const
 let add =  locations[i].add;


 // tslint:disable-next-line:prefer-const
 let latlngset = new google.maps.LatLng(lat, long);


 let marker = new google.maps.Marker({
    map, title , position: latlngset
  });
 map.setCenter(marker.getPosition());

 // tslint:disable-next-line:prefer-const
 let content = 'Location: ' + title +  '</h3>' + 'Address: ' + add;

  // tslint:disable-next-line:prefer-const
 let infowindow = new google.maps.InfoWindow();

 google.maps.event.addListener(marker, 'click', ((marker, content, infowindow) => {
        return () => {
           infowindow.setContent(content);
           infowindow.open(map, marker);
        };
    })(marker, content, infowindow));

  }
  }

}
