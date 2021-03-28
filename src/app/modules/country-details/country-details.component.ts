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
  ngOnInit(): void {
    
    this.ActivatedRoute.queryParams.subscribe((res:any)=> {
      this.country = JSON.parse(res.country);
      console.log(this.country);
    });

  }

}
