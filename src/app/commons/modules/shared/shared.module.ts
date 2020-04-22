import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MortalityRatePopoverComponent } from './components/mortality-rate-popover/mortality-rate-popover.component';

@NgModule({
  declarations: [
    MortalityRatePopoverComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MortalityRatePopoverComponent
  ],
  entryComponents: [
    MortalityRatePopoverComponent
  ]
})
export class SharedModule { }
