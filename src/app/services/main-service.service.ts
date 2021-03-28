import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(
    private http: HttpClient,
  ) { }
  
  getAllCountries () {
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }

  getCountriesByName(name) {
    return this.http.get(`https://restcountries.eu/rest/v2/name/${name}`)
  }

  getCountriesByRegion(region){
    return this.http.get(`https://restcountries.eu/rest/v2/region/${region}`)
  }

}
