import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';



import { MainServiceService } from '../../../services/main-service.service';
import { CountryModel } from '../models/country.model';


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
          this.error = false;
          this.mainService.getCountriesByName(value.toLocaleLowerCase()).subscribe((res: any) => {
            this.data = res;
          },
            err => {
              this.error = true;
            });
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
