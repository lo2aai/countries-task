import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  {
    path: '',

    // The empty route, routes for listing component just for now tell I had a login page  
    loadChildren: () => import('./modules/country/country.module').then(m => m.CountryModule)
  },

  { 
    path: 'countries-listing',
    loadChildren: () =>
    import('./modules/country/country.module').then(m => m.CountryModule)   
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
