import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  constructor(
    public ActivatedRoute: ActivatedRoute,
  ) { }

  country;

  domains;

  currencies;

  languages;

  ngOnInit(): void {
    
    this.ActivatedRoute.queryParams.subscribe((res:any)=> {
      this.country = JSON.parse(res.country);
    });

    this.domains = this.country.topLevelDomain;
    this.currencies = this.country.currencies;
    this.languages = this.country.languages;
  }

}
