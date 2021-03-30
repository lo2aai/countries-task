import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountryModel } from '../modules/country/models/country.model'
import { Observable } from 'rxjs';

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

  getCountriesByName(name): Observable<CountryModel[]> {
    return this.http.get<CountryModel[]>(`https://restcountries.eu/rest/v2/name/${name}`)
  }

  getCountriesByRegion(region) :Observable<CountryModel[]>{
    return this.http.get<CountryModel[]>(`https://restcountries.eu/rest/v2/region/${region}`)
  }

}
