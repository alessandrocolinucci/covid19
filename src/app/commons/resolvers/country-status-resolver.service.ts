import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ApiService } from '../services/api/api.service';

@Injectable()
export class CountryStatusResolver implements Resolve<any> {

  constructor(
    private apiService: ApiService
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.apiService.getCountryStats(route.paramMap.get('code'));
  }
}