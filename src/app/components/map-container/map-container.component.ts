import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import Leaft from 'leaflet';
import { GeoService } from 'src/app/services/geo.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.scss'],
})
export class MapContainerComponent implements AfterContentInit, OnInit {
  long: number;
  lat: number;
  map: Leaft.map;
  constructor(private _apiGeo: GeoService) {}

  ngOnInit() {
    this.long = this._apiGeo.location.lng;
    this.lat = this._apiGeo.location.lat;
  }

  ngAfterContentInit() {
    this._apiGeo.$location.subscribe({
      next: (v) => {
        this.lat = v.lat;
        this.long = v.lng;
        this.map.panTo({ lon: this.long, lat: this.lat });
        this.createMarket();
      },
    });
    this.createMap();
  }

  createMap() {
    this.map = Leaft.map('map-container', {
      center: [this.lat, this.long],
      zoom: 14,
      zoomControl: false,
      attributionControl: false,
    });
    this.configMap();
    this.createMarket();
  }

  configMap() {
    Leaft.tileLayer(
      `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${environment.mapApi}`,
      {
        maxZoom: 18,
        noWrap: true,
        minWidth: 375,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        dragging: false,
        accessToken: environment.mapApi,
      }
    ).addTo(this.map);
  }

  createMarket() {
    const marketDefault = Leaft.icon({
      iconUrl: 'assets/icon-location.svg',
      iconSize: [30, 40],
      iconAnchor: [15, 40],
    });
    Leaft.Marker.prototype.options.icon = marketDefault;
    Leaft.marker([this.lat, this.long])
      .addTo(this.map)
      .bindPopup('Estas aqui')
      .openPopup();
  }
}
