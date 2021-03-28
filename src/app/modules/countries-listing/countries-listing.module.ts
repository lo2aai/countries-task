import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesListingRoutingModule } from './countries-listing-routing.module';
import { CountriesListingComponent } from './countries-listing.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CountriesListingComponent],
  imports: [
    Ng2SearchPipeModule,
    CommonModule,
    CountriesListingRoutingModule,
    FormsModule
  ]
})
export class CountriesListingModule { }
