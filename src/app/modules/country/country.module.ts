import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountriesListingComponent } from './countries-listing/countries-listing.component';
import { NgxsModule } from '@ngxs/store';
import { SharedModule } from 'src/app/shared/shared.module';
import { CountriesState } from './state/countries.state';
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
    SharedModule,
    FormsModule,
    NgxsModule.forFeature([CountriesState])
  ]
})
export class CountryModule { }
