import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesListingComponent } from './countries-listing/countries-listing.component';
import { CountryDetailsComponent } from './country-details/country-details.component';


const routes: Routes = [
  { path: '', component: CountriesListingComponent },
  { path: 'countryDetails/:name', component: CountryDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountryRoutingModule { }
