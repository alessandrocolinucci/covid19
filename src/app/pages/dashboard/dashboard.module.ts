import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './dashboard.page';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { SharedModule } from 'src/app/commons/modules/shared/shared.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    NgCircleProgressModule,
    DashboardPageRoutingModule
  ],
  declarations: [
    DashboardPage,
    CountryCardComponent
  ]
})
export class DashboardPageModule {}
