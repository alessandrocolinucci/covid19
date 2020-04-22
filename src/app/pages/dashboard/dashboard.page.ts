import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/commons/services/api/api.service';
import { GlobalStatus } from 'src/app/commons/models/global-status';
import { CountryStatus, Country } from 'src/app/commons/models/country-status';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  globalStatus: GlobalStatus;
  countriesStatus: CountryStatus[];

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.apiService.getCountriesStats().subscribe(res => this.countriesStatus = res);
  }

  goToDetail(country: Country) {
    this.router.navigate(['country', country.code.toLowerCase() ])
  }
  
}
