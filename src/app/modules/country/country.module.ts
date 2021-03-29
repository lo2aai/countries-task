import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountriesListingComponent } from './countries-listing/countries-listing.component';
import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    CountryDetailsComponent,
    CountriesListingComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class CountryModule { }
