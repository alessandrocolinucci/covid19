import { TimelineStatus, TimelineStatusDTO } from './timeline-status';

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
    timeline?: TimelineStatusDTO[];
}

export class CountryStatus {

    country: Country;
    confirmed: number;
    recovered: number;
    critical: number;
    deaths: number;
    active: number;
    newConfirmed: number;
    newRecovered: number;
    newDeaths: number;
    stats: Stats;
    updatedAt: Date;
    timeline?: TimelineStatus[];

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
            this.confirmed = dto.timeline ? dto.timeline[0].confirmed : dto.latest_data.confirmed;
            this.recovered = dto.timeline ? dto.timeline[0].recovered : dto.latest_data.recovered;
            this.deaths = dto.timeline ? dto.timeline[0].deaths : dto.latest_data.deaths;
            this.active = dto.timeline ? dto.timeline[0].active : 0;
            this.critical = dto.latest_data.critical;
            this.newConfirmed = dto.timeline ? dto.timeline[0].new_confirmed : dto.today.confirmed;
            this.newDeaths = dto.timeline ? dto.timeline[0].new_deaths : dto.today.deaths;
            this.newRecovered = dto.timeline ? dto.timeline[0].new_recovered : 0;
            this.stats = {
                casesPerMillionPopulation: dto.latest_data.calculated.cases_per_million_population,
                deathRate: dto.latest_data.calculated.death_rate,
                recoveredVsDeathRatio: dto.latest_data.calculated.recovered_vs_death_ratio,
                recoveryRate: dto.latest_data.calculated.recovery_rate
            }
            this.updatedAt = dto.updated_at ? new Date(dto.updated_at) : null;
            this.timeline = dto.timeline ? dto.timeline.map(t => new TimelineStatus(t)) : null;
        }
    }
    
    get todayInfected(): number {
        return this.timeline[this.timeline.length - 1].newConfirmed;
    }

    get todayRecovered(): number {
        return this.timeline[this.timeline.length - 1].newRecovered;
    }

    get todayDeaths(): number {
        return this.timeline[this.timeline.length - 1].newDeaths;
    }

    get firstInfectedDate(): Date {
        return this.timeline[0].date;
    }
}