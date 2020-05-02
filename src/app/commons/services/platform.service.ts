import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(
    private platform: Platform
  ) { }

  /**
   * on a device running iOS.
   */
  isIOS(): boolean {
    return this.platform.is('ios');
  }

  /**
   * on a device running Android.
   */
  isAndroid(): boolean {
    return this.platform.is('android');
  }

  /**
   * as a PWA app
   */
  isPWA(): boolean {
    return this.platform.is('pwa');    
  }

  /**
   * on a desktop device
   */
  isDesktop(): boolean {
    return this.platform.is('desktop');
  }

  /**
   * on a tablet device.  
   */
  isTablet(): boolean {
    return this.platform.is('tablet');
  }

  /**
   * on an iPhone device
   */
  isIPhone(): boolean {
    return this.platform.is('iphone');
  }

  /**
   * on an iPad device.
   */
  isIPad(): boolean {
    return this.platform.is('ipad');
  }

  /**
   * on a device running Cordova or Capacitor.
   */
  isNativeDevice(): boolean {
    return this.platform.is('hybrid');
  }

  /**
   * Check if is in Standalone Mode
   */
  isInStandaloneMode(): boolean {
    return ('standalone' in window.navigator) && (window.navigator['standalone'])
  }

  /**
   * Check when is ready
   */
  isReady(): Promise<string> {
    return this.platform.ready();
  }
}