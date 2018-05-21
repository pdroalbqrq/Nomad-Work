import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

import { } from '@types/googlemaps';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  getLocation() {
    if (navigator.geolocation) {
      console.log("suporting")
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log("Browser not suporting")
    }
  }
  showPosition(position) {
    console.log(`latitude:${position.coords.latitude}`)
    var lati = position.coords.latitude;
    console.log(`longitude:${position.coords.longitude}`)
    var longi = position.coords.longitude
    var LatLong = { lat: position.coords.latitude, lng: position.coords.longitude }
    console.log(LatLong)
    return LatLong;
  }

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  constructor() {
  }


  ngOnInit() {

    var mapProp = {
      center: { lat: -8.0158115, lng: -34.8557664 },
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

  }
  pegarLocalizacao() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position);
      })
    else
      console.log('seu navegador não tem acesso a loc')
  }

}
