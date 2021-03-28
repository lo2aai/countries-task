import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesListingComponent } from './countries-listing.component';

const routes: Routes = [{ path: '', component: CountriesListingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesListingRoutingModule { }
