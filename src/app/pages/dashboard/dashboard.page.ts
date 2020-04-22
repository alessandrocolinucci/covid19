import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/commons/services/api/api.service';
import { GlobalStatus } from 'src/app/commons/models/global-status';
import { CountryStatus } from 'src/app/commons/models/country-status';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  globalStatus: GlobalStatus;
  countriesStatus: CountryStatus[];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.getGlobalStats().subscribe(res => {
      this.globalStatus = new GlobalStatus(res.results[0]);
    })

    this.apiService.getCountriesStats().subscribe((res) => {
      this.countriesStatus = Object.keys(res).map(k => new CountryStatus(res[k]));
    });
  }

}
