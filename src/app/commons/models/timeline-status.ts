export interface TimelineStatusDTO {
    updated_at: string;
    date: string;
    deaths: number;
    confirmed: number;
    recovered: number;
    active: number;
    new_confirmed: number;
    new_recovered: number;
    new_deaths: number;
    is_in_progress?: boolean;
}

export class TimelineStatus {

    updatedAt: Date;
    date: Date;
    deaths: number;
    confirmed: number;
    recovered: number;
    active: number;
    newConfirmed: number;
    newRecovered: number;
    newDeaths: number;
    isInProgress: boolean;

    constructor(dto: TimelineStatusDTO) {
        if (dto) {
            this.updatedAt = dto.updated_at ? new Date(dto.updated_at) : null;
            this.date = dto.date ? new Date(dto.date) : null;
            this.confirmed = dto.confirmed;
            this.recovered = dto.recovered;
            this.active = dto.active;
            this.newConfirmed = dto.new_confirmed;
            this.newRecovered = dto.new_recovered;
            this.newDeaths = dto.new_deaths;
            this.isInProgress = dto.is_in_progress;
        }
    }
}