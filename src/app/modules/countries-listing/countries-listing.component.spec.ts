import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesListingComponent } from './countries-listing.component';

describe('CountriesListingComponent', () => {
  let component: CountriesListingComponent;
  let fixture: ComponentFixture<CountriesListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
