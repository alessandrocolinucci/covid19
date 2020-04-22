import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MortalityRatePopoverComponent } from './components/mortality-rate-popover/mortality-rate-popover.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';

@NgModule({
  declarations: [
    MortalityRatePopoverComponent,
    DateAgoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MortalityRatePopoverComponent,
    DateAgoPipe
  ],
  entryComponents: [
    MortalityRatePopoverComponent
  ]
})
export class SharedModule { }
