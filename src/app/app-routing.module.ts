import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CountryStatusResolver } from './commons/resolvers/country-status-resolver.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'country/:code',
    resolve: { countryStatus: CountryStatusResolver },
    loadChildren: () => import('./pages/country/country.module').then( m => m.CountryPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CountryStatusResolver
  ]
})
export class AppRoutingModule {}
