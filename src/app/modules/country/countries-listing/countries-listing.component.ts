import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';



import { MainServiceService } from '../../../services/main-service.service';
import { CountryModel } from '../models/country.model';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Select, Store } from '@ngxs/store';
import { getAllCountriesWithStateManagement, getCountriesByName, getCountriesWithRegionName } from '../state/countries.action';
import { CountriesState } from '../state/countries.state';








@Component({
  selector: 'app-countries-listing',
  templateUrl: './countries-listing.component.html',
  styleUrls: ['./countries-listing.component.scss']
})
export class CountriesListingComponent implements OnInit {


  userSearchUpdate = new Subject<string>();

  userSearchKeyWord: string;

  error: boolean = false;

  whiteSpacesError: boolean = false;

  specialCharactersFormat  = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  
  constructor( 
    public mainService: MainServiceService,
    public router: Router,
    private _snackBar: MatSnackBar,
    private store: Store,
  ) {

    this.getCountriesWithSearchKeyWord()
  }

  // I need to create another selector for the single country getter
  @Select(CountriesState.allCountries) public data: Observable<CountryModel[]>;


  ngOnInit(): void {
    this.getAllCountries();
  }

  // This function takes the user input keyword and search with it, if it dose not exist  or it returns an error it reassign the value of error variable with true, and so on.
  getCountriesWithSearchKeyWord() {
    this.userSearchUpdate.pipe(
      debounceTime(500),
      distinctUntilChanged())
      .subscribe(value => {
        // If the input is not empty
        if (value !== "") {
          // This regex removes all the spaces from user input if the length of the value = 0 so the user only entered white spaces 
          if (!value.replace(/\s/g, '').length) {
            this.error = true;
            this.whiteSpacesError = true;
            return(this.whiteSpacesError, this.error);
          } else if (this.specialCharactersFormat.test(value)) {
            return this.openSnackBar('Please remove any special character', 'Close')
          }
          this.error = false;
          this.getAllCountriesWithName(value);
        } else {
          // if the input is empty call all countries.
          this.error = false;
          this.getAllCountries();
        }
    });
  }



  getCountriesWithRegionValueCheck(value) {
    if(value !== "All"){
      this.getCountriesWithRegion(value);
    } else {
      this.getAllCountries();
    }
  }
  
  countryClick(country) {
    this.router.navigate(['/countryDetails', country])
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  getAllCountries() {
    this.store.dispatch(new getAllCountriesWithStateManagement());
  }


  getAllCountriesWithName(name) {
    this.store.dispatch(new getCountriesByName(name)).subscribe(
      () => {
      },
      error => {
        this.error = true;
        this.whiteSpacesError = false;
      }
    );
  }


  getCountriesWithRegion(regionName) {
    this.store.dispatch(new getCountriesWithRegionName(regionName));
  }

}
