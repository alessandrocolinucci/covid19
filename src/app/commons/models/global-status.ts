export interface GlobalStatusDTO {
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
}

export class GlobalStatus {

    newConfirmed: number;
    totalConfirmed: number;
    newDeaths: number;
    totalDeaths: number;
    newRecovered: number;
    totalRecovered: number;

    constructor(dto: GlobalStatusDTO) {
        if (dto) {
            this.newConfirmed = dto.NewConfirmed;
            this.totalConfirmed = dto.TotalConfirmed;
            this.newDeaths = dto.NewDeaths;
            this.totalDeaths = dto.TotalDeaths;
            this.newRecovered = dto.NewRecovered;
            this.totalRecovered = dto.TotalRecovered;
        }
    }
    
}