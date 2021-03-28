import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },

  {
    path: 'countryDetails',
    loadChildren: () => import('./modules/country-details/country-details.module').then(m => m.CountryDetailsModule)
  },

  { 
    path: 'countries-listing', 
    loadChildren: () => import('./modules/countries-listing/countries-listing.module').then(m => m.CountriesListingModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ] 
})
export class AppRoutingModule { }