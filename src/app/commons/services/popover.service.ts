import { Injectable } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ComponentRef, OverlayEventDetail, PopoverOptions } from '@ionic/core';
import { from, Observable } from 'rxjs';
import { flatMap, tap } from 'rxjs/operators';

@Injectable()
export class PopoverService {
  constructor(private popoverController: PopoverController) { }

  showPopover(opts: PopoverOptions<ComponentRef>): Observable<OverlayEventDetail> {
    return from(this.popoverController.create(opts)).pipe(
      tap(popover => popover.present()),
      flatMap(popover => {
        return from(popover.onDidDismiss());
      })
    );
  }

  dismissPopover(params: any) {
    this.popoverController.dismiss(params);
  }
}