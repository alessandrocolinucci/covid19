import { Component, OnInit } from '@angular/core';
import { VERSION } from './../environments/version';
import { ThemeService } from './commons/services/theme.service';
import { PlatformService } from './commons/services/platform.service';
import { PopoverService } from './commons/services/popover.service';
import { IosPwaPopoverComponent } from './commons/modules/shared/components/ios-pwa-popover/ios-pwa-popover.component';
import { take } from 'rxjs/operators';

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
      title: 'Home',
      url: '/',
      icon: 'grid-outline'
    },
    {
      title: 'Info',
      url: '/about',
      icon: 'information-circle-outline'
    }
  ];

  constructor(
    private themeService: ThemeService,
    private platformService: PlatformService,
    private popoverService: PopoverService
  ) {
    this.initializeApp();
  }

  initializeApp() { }

  ngOnInit() { }

  addIosPwa() {
    this.popoverService.showPopover({
      component: IosPwaPopoverComponent,
      showBackdrop: true,
      backdropDismiss: true,
      cssClass: 'ios-pwa-popover'
    }).pipe(take(1)).subscribe();
  }

  toggleDarkMode(ev: CustomEvent) {
    this.themeService.toggleMode(ev.detail.checked);
  }

  get isInstallable(): boolean {
    return (this.platformService.isIPad() || this.platformService.isIPhone()) && !this.platformService.isInStandaloneMode();
  }
}
