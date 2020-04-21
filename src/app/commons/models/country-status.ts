export interface CountryStatusDTO {
    Country: string;
    CountryCode: string;
    Slug: string;
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
    Date: string;
}

export class CountryStatus {

    country: string;
    countryCode: string;
    slug: string;
    newConfirmed: number;
    totalConfirmed: number;
    newDeaths: number;
    totalDeaths: number;
    newRecovered: number;
    totalRecovered: number;
    date: Date;

    constructor(dto: CountryStatusDTO) {
        if (dto) {
            this.country = dto.Country;
            this.countryCode = dto.CountryCode;
            this.slug = dto.Slug;
            this.newConfirmed = dto.NewConfirmed;
            this.totalConfirmed = dto.TotalConfirmed;
            this.newDeaths = dto.NewDeaths;
            this.totalDeaths = dto.TotalDeaths;
            this.newRecovered = dto.NewRecovered;
            this.totalRecovered = dto.TotalRecovered;
            this.date = dto.Date ? new Date(dto.Date) : null;
        }
    }
    
}