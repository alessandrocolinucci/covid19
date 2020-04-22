import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpGlobalResponse, HttpCountriesResponse } from './api.interface';
import { map } from 'rxjs/operators';
import { CountryStatus } from '../../models/country-status';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private get ROUTES() {
    return {
      countries: environment["endpointURL"] + "countries"
    }
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  getCountriesStats(): Observable<CountryStatus[]> {
    return this.httpClient.get<HttpCountriesResponse>(this.ROUTES.countries).pipe(map(res => res.data.map(d => new CountryStatus(d))));
  }

}
