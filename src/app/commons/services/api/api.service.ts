import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpSummaryResponse } from './api.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private get ROUTES() {
    return {
      global: environment["baseURL"] + "global=stats",
      countries: environment["baseURL"] + "countryTotals=ALL",
    }
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  getGlobalStats(): Observable<any> {
    return this.httpClient.get(this.ROUTES.global);
  }

  getCountriesStats(): Observable<any> {
    return this.httpClient.get(this.ROUTES.countries);
  }

}
