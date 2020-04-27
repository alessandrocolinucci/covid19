import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryStatus } from 'src/app/commons/models/country-status';

@Component({
  selector: 'app-country',
  templateUrl: './country.page.html',
  styleUrls: ['./country.page.scss'],
})
export class CountryPage implements OnInit {

  countryStatus: CountryStatus;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.route.snapshot.data["countryStatus"]);
    this.countryStatus = this.route.snapshot.data.countryStatus;

  }

}
