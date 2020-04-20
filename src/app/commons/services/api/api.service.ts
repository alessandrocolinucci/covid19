import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private get ROUTES() {
    return {
      // register: environment["baseURL"] + "/anagrafica/registrazione",
    }
  }

  constructor() { }
}
