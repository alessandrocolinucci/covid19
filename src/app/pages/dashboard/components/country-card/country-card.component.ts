import { Component, OnInit, Input } from '@angular/core';
import { CountryStatus } from 'src/app/commons/models/country-status';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
})
export class CountryCardComponent implements OnInit {

  @Input() countryStatus: CountryStatus;

  constructor() { }

  ngOnInit() {}

}
