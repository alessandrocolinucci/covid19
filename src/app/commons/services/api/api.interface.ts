import { CountryStatusDTO } from '../../models/country-status';
import { GlobalStatusDTO } from '../../models/global-status';

export interface HttpSummaryResponse {
    Global: GlobalStatusDTO,
    Countries: CountryStatusDTO[]
}