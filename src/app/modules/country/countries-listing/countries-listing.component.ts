import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';



import { MainServiceService } from '../../../services/main-service.service';
import { CountryModel } from '../models/country.model';
import { flatten } from '@angular/compiler';


@Component({
  selector: 'app-countries-listing',
  templateUrl: './countries-listing.component.html',
  styleUrls: ['./countries-listing.component.scss']
})
export class CountriesListingComponent implements OnInit {

  data:CountryModel[] ;

  userSearchUpdate = new Subject<string>();

  userSearchKeyWord: string;

  error: boolean = false;

  whiteSpacesError: boolean = false;
  
  constructor( 
    public mainService: MainServiceService,
    public router: Router,
  ) {

    this.getCountriesWithSearchKeyWord()
  }



  ngOnInit(): void {
    this.getAllCountries();
  }

  // This function takes the user input keyword and search with it, if it dose not excist  or it returns an error it reassign the value of error variable with true, and so on.
  getCountriesWithSearchKeyWord() {
    this.userSearchUpdate.pipe(
      debounceTime(500),
      distinctUntilChanged())
      .subscribe(value => {
        // If the input is not empty
        if (value !== "") {
          if (!value.replace(/\s/g, '').length) {
            this.error = true;
            this.whiteSpacesError = true;
            return(this.whiteSpacesError, this.error);
          }
          // // regex tests if the 
          // /^\s/.test(value);
          this.error = false;
          this.mainService.getCountriesByName(value.toLocaleLowerCase()).subscribe((res: any) => {
            this.data = res;
          },
          err => {
            this.error = true;
            this.whiteSpacesError = false;
          });
          // This regex removes all the spaces from user input if the length of the value = 0 so the user only entered white spaces 
        } else {
          // if the input is empty call all countries.
          this.error = false;
          this.getAllCountries();
        }
    });
  }

  getAllCountries(){
    this.mainService.getAllCountries().subscribe((res) => {
      this.data = res;
    })
  }


  getCountriesWithRegion(value) {
    if(value !== "All"){
      this.mainService.getCountriesByRegion(value).subscribe((res:any) => {
        this.data = res;
      })
    } else {
      this.getAllCountries();
    }
  }
  
  countryClick(country) {
    this.router.navigate(['/countryDetails', country])
  }



}
