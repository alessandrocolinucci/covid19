import { Component, OnInit } from '@angular/core';
import { VERSION } from './../environments/version';
import { ThemeService } from './commons/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  version = VERSION;
  
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Dashboard',
      url: '/',
      icon: 'grid-outline'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'information-circle-outline'
    }
  ];

  constructor(
    private themeService: ThemeService
  ) {
    this.initializeApp();
  }

  initializeApp() { }

  ngOnInit() { }

  toggleDarkMode(ev: CustomEvent) {
    this.themeService.toggleMode(ev.detail.checked);
  }

}
