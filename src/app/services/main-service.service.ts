import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryModel } from '../modules/country/models/country.model'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(
    private http: HttpClient,
  ) { }
  
  getAllCountries () :Observable<CountryModel[]>  {
    return this.http.get<CountryModel[]>('https://restcountries.eu/rest/v2/all');
  }

  getCountriesBySearchName(name): Observable<CountryModel[]> {
    return this.http.get<CountryModel[]>(`https://restcountries.eu/rest/v2/name/${name}`);
  }

  getSingleCountryByName(name): Observable<CountryModel> {
    return this.http.get<CountryModel[]>(`https://restcountries.eu/rest/v2/name/${name}`).pipe(map((countries:CountryModel[])=> {
      return countries[0];
    }));
  }

  getCountriesByRegion(region) :Observable<CountryModel[]>{
    return this.http.get<CountryModel[]>(`https://restcountries.eu/rest/v2/region/${region}`);
  }

}
