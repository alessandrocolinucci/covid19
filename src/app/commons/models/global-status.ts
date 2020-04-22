export interface GlobalStatusDTO {
    total_cases: number;
    total_recovered: number;
    total_unresolved: number;
    total_deaths: number;
    total_new_cases_today: number;
    total_new_deaths_today: number;
    total_active_cases: number;
    total_serious_cases: number;
    total_affected_countries: number;
}

export class GlobalStatus {

    cases: number;
    recovered: number;
    unresolved: number;
    deaths: number;
    active: number;
    serious: number;
    newCases: number;
    newDeaths: number;
    affectedCountries: number;

    constructor(dto: GlobalStatusDTO) {
        if (dto) {
            this.cases = dto.total_cases;
            this.recovered = dto.total_recovered;
            this.unresolved = dto.total_unresolved;
            this.deaths = dto.total_deaths;
            this.active = dto.total_active_cases;
            this.serious = dto.total_serious_cases;
            this.newCases = dto.total_new_cases_today;
            this.newDeaths = dto.total_new_deaths_today;
            this.affectedCountries = dto.total_affected_countries;
        }
    }
    
}