import { CountryStatusDTO } from '../../models/country-status';
import { GlobalStatusDTO } from '../../models/global-status';

export interface HttpGlobalResponse {
    results: GlobalStatusDTO[],
    stat: string
}

export interface HttpCountriesResponse {
    countryitems: [ Map<number, CountryStatusDTO>[] ];
}