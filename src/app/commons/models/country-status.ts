export interface CountryCoordinates {
    latitude: number;
    longitude: number;
}

export interface Country {
    code: string;
    name: string;
    population: number;
    coordinates: CountryCoordinates;
}

export interface Stats {
    deathRate: number;
    recoveryRate: number;
    recoveredVsDeathRatio: number;
    casesPerMillionPopulation: number;
}

export interface CountryStatusDTO {
    coordinates: CountryCoordinates;
    name: string;
    code: string;
    population: number;
    updated_at: string;
    today: {
        deaths: number; 
        confirmed: number;
    };
    latest_data: {
        deaths: number;
        confirmed: number;
        recovered: number; 
        critical: number; 
        calculated: {
            death_rate: number;
            recovery_rate: number;
            recovered_vs_death_ratio: number;
            cases_per_million_population: number;
        }
    }
}

export class CountryStatus {

    country: Country;
    confirmed: number;
    recovered: number;
    deaths: number;
    newConfirmed: number;
    newDeaths: number;
    stats: Stats;
    updatedAt: Date;

    constructor(dto: CountryStatusDTO) {
        if (dto) {
            this.country = {
                code: dto.code,
                name: dto.name,
                population: dto.population,
                coordinates: {
                    latitude: dto.coordinates.latitude,
                    longitude: dto.coordinates.longitude
                }
            }
            this.confirmed = dto.latest_data.confirmed;
            this.recovered = dto.latest_data.recovered;
            this.deaths = dto.latest_data.deaths;
            this.newConfirmed = dto.today.confirmed;
            this.newDeaths = dto.today.deaths;
            this.stats = {
                casesPerMillionPopulation: dto.latest_data.calculated.cases_per_million_population,
                deathRate: dto.latest_data.calculated.death_rate,
                recoveredVsDeathRatio: dto.latest_data.calculated.recovered_vs_death_ratio,
                recoveryRate: dto.latest_data.calculated.recovery_rate
            }
            this.updatedAt = dto.updated_at ? new Date(dto.updated_at) : null;
        }
    }
    
}