import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpCountriesResponse, HttpGlobalResponse } from './api.interface';
import { map } from 'rxjs/operators';
import { CountryStatus } from '../../models/country-status';
import { TimelineStatus } from '../../models/timeline-status';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private get ROUTES() {
    return {
      countries: environment["endpointURL"] + "countries",
      timeline: environment["endpointURL"] + "timeline"
    }
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  getGlobalTimeline(): Observable<TimelineStatus[]> {
    return this.httpClient.get<HttpGlobalResponse>(this.ROUTES.timeline).pipe(map(res => {
      return res.data.map(t => new TimelineStatus(t));
    }));
  }

  getCountriesStats(): Observable<CountryStatus[]> {
    return this.httpClient.get<HttpCountriesResponse>(this.ROUTES.countries).pipe(map(res => {
      return res.data.filter(d => d.latest_data.confirmed > 0).map(c => new CountryStatus(c));
    }));
  }

}
