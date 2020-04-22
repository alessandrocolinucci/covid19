export interface CountryStatusDTO {
    title: string;
    code: string;
    total_cases: number;
    total_recovered: number;
    total_unresolved: number;
    total_deaths: number;
    total_new_cases_today: number;
    total_new_deaths_today: number;
    total_active_cases: number;
    total_serious_cases: number;
    total_danger_rank?: number;
}

export class CountryStatus {

    country: string;
    countryCode: string;
    cases: number;
    recovered: number;
    unresolved: number;
    deaths: number;
    active: number;
    serious: number;
    newCases: number;
    newDeaths: number;
    dangerRank?: number;

    constructor(dto: CountryStatusDTO) {
        if (dto) {
            this.country = dto.title;
            this.countryCode = dto.code;
            this.cases = dto.total_cases;
            this.recovered = dto.total_recovered;
            this.unresolved = dto.total_unresolved;
            this.deaths = dto.total_deaths;
            this.active = dto.total_serious_cases;
            this.newCases = dto.total_new_cases_today;
            this.newDeaths = dto.total_new_deaths_today;
            this.dangerRank = dto.total_danger_rank;
        }
    }
    
    get mortalityRate(): string {
        return ((this.deaths / this.cases) * 100).toFixed(2);
    }
    
}