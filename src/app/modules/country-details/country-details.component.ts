import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainServiceService } from 'src/app/services/main-service.service';



@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  constructor(
    public ActivatedRoute: ActivatedRoute,
    public MainServiceService: MainServiceService
  ) { }

  country;

  domains;

  currencies;

  languages;

  countryName;

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((res:any)=> {
      this.countryName = res.name;
    });

    this.MainServiceService.getCountriesByName(this.countryName).subscribe((res:any) => {
      this.country = res[0];
      this.domains = this.country.topLevelDomain;
      this.currencies = this.country.currencies;
      this.languages = this.country.languages;
    })
  }

}
