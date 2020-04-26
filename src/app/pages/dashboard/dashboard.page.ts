import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/commons/services/api/api.service';
import { CountryStatus, Country } from 'src/app/commons/models/country-status';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { TimelineStatus } from 'src/app/commons/models/timeline-status';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  todayStatus: TimelineStatus;
  countriesStatus: CountryStatus[];

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.apiService.getGlobalTimeline().subscribe((timeline) => this.todayStatus = timeline.find(t => t.isInProgress == true));
    this.apiService.getCountriesStats().subscribe(countriesStatus => this.countriesStatus = countriesStatus.sort((a, b) => b.confirmed - a.confirmed));
  }

  goToDetail(country: Country) {
    this.router.navigate(['country', country.code.toLowerCase() ])
  }
  
  get recoveryRatio(): string {
    return this.todayStatus ? ((this.todayStatus.recovered / this.todayStatus.confirmed) * 100).toFixed(2) : '';
  }

  get deathRatio(): string {
    return this.todayStatus ? ((this.todayStatus.deaths / this.todayStatus.confirmed) * 100).toFixed(2) : '';
  }
}
