import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { location } from 'src/interfaces/ilocation';

@Injectable({
  providedIn: 'root',
})
export class GeoService {
  private geoServer: string =
    'https://cors-anywhere.herokuapp.com/http://api.ipstack.com';
  public location: location = {
    lat: -75.48326110839844,
    lng: 10.400710105895996,
    ip: '179.13.52.41',
    city: 'Cartagena',
    zip: '130005',
    flag: '🇨🇴',
    code: 'CO',
    country: 'Colombia',
  };

  $location: Subject<location> = new Subject();

  constructor(private http: HttpClient) {}

  getInfoLocation(ipAddress: string | number) {
    return this.http.get(
      `${this.geoServer}/${ipAddress}?access_key=${environment.geoApi}`
    );
  }
}
