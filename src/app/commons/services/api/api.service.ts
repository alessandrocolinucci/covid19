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
      summary: environment["baseURL"] + "summary",
    }
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  getSummary(): Observable<HttpSummaryResponse> {
    return this.httpClient.get<HttpSummaryResponse>(this.ROUTES.summary);
  }
}
