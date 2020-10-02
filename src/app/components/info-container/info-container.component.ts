import { Component, Input, OnInit } from '@angular/core';
import { GeoService } from 'src/app/services/geo.service';
import { location } from 'src/interfaces/ilocation';

@Component({
  selector: 'app-info-container',
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.scss'],
})
export class InfoContainerComponent implements OnInit {
  ipValue: string = '';
  ipInfo: location;

  @Input() set ipChange(ipAddress: string) {
    this.ipValue = ipAddress;
    this.getInfoIp();
  }

  constructor(public _geoApi: GeoService) {}

  ngOnInit(): void {
    this.ipInfo = this._geoApi.location;
  }

  getInfoIp() {
    this._geoApi.getInfoLocation(this.ipValue).subscribe((resp: any) => {
      this.ipInfo = {
        lat: resp.latitude,
        lng: resp.longitude,
        country: resp.country_name,
        city: resp.region_name,
        zip: resp.zip,
        flag: resp.location.country_flag_emoji,
        ip: resp.ip,
        code: resp.country_code,
      };
      this._geoApi.$location.next(this.ipInfo);
    });
  }
}
