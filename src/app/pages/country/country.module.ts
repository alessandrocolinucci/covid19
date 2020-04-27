import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CountryPageRoutingModule } from './country-routing.module';
import { CountryPage } from './country.page';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SharedModule } from 'src/app/commons/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    NgCircleProgressModule,
    CountryPageRoutingModule
  ],
  declarations: [CountryPage]
})
export class CountryPageModule {}
