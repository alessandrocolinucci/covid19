import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  darkMode: boolean = false;

  constructor() { }

  toggleMode(checked: boolean) {
    console.log(`Dark Mode: ${checked}`);
    window.document.body.classList.toggle('dark', checked);;
  }

}
