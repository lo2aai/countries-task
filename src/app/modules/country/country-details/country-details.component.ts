import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainServiceService } from 'src/app/services/main-service.service';
import { Select, Store } from '@ngxs/store';
import { getSingleCountryByName } from '../state/countries.action';
import { CountriesState } from '../state/countries.state';
import { CountryModel } from '../models/country.model';
import { Observable } from 'rxjs';





@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  constructor(
    public ActivatedRoute: ActivatedRoute,
    public MainServiceService: MainServiceService,
    private store: Store,
  ) { }

  country;

  domains;

  currencies;

  languages;

  countryName;


  @Select(CountriesState.singleCountryWithName) public filteredData: Observable<CountryModel>;

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((res:any)=> {
      this.countryName = res.name;
    });

    this.getAllCountriesWithName(this.countryName)
  }


  getAllCountriesWithName(name) {
    this.store.dispatch(new getSingleCountryByName(name));
  }

}
