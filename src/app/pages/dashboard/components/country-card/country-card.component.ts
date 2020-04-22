import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CountryStatus, Country } from 'src/app/commons/models/country-status';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
})
export class CountryCardComponent implements OnInit {

  @Input() countryStatus: CountryStatus;
  @Output('onDetails') detailsEmitter: EventEmitter<Country> = new EventEmitter<Country>();

  constructor() { }

  ngOnInit() {}

  emitDetails() {
    this.detailsEmitter.emit(this.countryStatus.country);
  }

}
