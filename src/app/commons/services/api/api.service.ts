import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpGlobalResponse, HttpCountriesResponse } from './api.interface';
import { map } from 'rxjs/operators';

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

  getGlobalStats(): Observable<HttpGlobalResponse> {
    return this.httpClient.get<HttpGlobalResponse>(this.ROUTES.global);
  }

  getCountriesStats(): Observable<any> {
    return this.httpClient.get<HttpCountriesResponse>(this.ROUTES.countries).pipe(map(res => res.countryitems[0]));
  }

}
