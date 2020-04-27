import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { tap } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class CountryStatusResolver implements Resolve<any> {

  constructor(
    private apiService: ApiService,
    private loadingService: LoadingService
  ) {}

  resolve(route: ActivatedRouteSnapshot) {
    this.loadingService.show('Getting country info');
    return this.apiService.getCountryStats(route.paramMap.get('code')).pipe(tap(() => {
      this.loadingService.hide();
    }));
  }
}