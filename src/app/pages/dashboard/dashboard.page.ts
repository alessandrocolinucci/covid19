import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/commons/services/api/api.service';
import { CountryStatus, Country } from 'src/app/commons/models/country-status';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  countriesStatus$: Observable<CountryStatus[]>;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { 
    this.countriesStatus$ = this.apiService.getCountriesStats();
  }

  ngOnInit() {
  }

  goToDetail(country: Country) {
    this.router.navigate(['country', country.code.toLowerCase() ])
  }
  
  filterCountry(e: CustomEvent) {
    let searchTerm = e.detail.value.toLowerCase();
  }
  
}
