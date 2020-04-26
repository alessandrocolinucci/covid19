import { CountryStatusDTO } from '../../models/country-status';
import { TimelineStatusDTO } from '../../models/timeline-status';

export interface HttpGlobalResponse {
    data: TimelineStatusDTO[];
}
export interface HttpCountriesResponse {
    data: CountryStatusDTO[];
}

export interface HttpCountryResponse {
    data: CountryStatusDTO;
}