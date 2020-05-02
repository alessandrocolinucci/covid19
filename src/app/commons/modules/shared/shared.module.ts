import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { IosPwaPopoverComponent } from './components/ios-pwa-popover/ios-pwa-popover.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    IosPwaPopoverComponent,
    DateAgoPipe
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    IosPwaPopoverComponent,
    DateAgoPipe
  ],
  entryComponents: [
    IosPwaPopoverComponent
  ]
})
export class SharedModule { }
