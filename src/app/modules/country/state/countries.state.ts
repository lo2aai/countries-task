import { Injectable } from '@angular/core';
import { CountryModel } from '../models/country.model';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { MainServiceService } from 'src/app/services/main-service.service';

import { getAllCountriesWithStateManagement, getCountriesByName, getSingleCountryByName, getCountriesWithRegionName } from './countries.action'
import { tap } from 'rxjs/operators';




class CountriesStateModel {
    countries: CountryModel[];
    country: CountryModel;
    

    constructor() {
        this.countries = [];
        this.country = null;
    }
}




@State<CountriesStateModel>({
    // Name of this state
    name: 'countries',
    defaults: new CountriesStateModel
})
@Injectable()
export class CountriesState {
    constructor(private _MainServiceService: MainServiceService) { }

    @Selector()
    static allCountries(state: CountriesStateModel): CountryModel[] {
        return state.countries;
    }


    @Selector()
    static singleCountryWithName(state: CountriesStateModel): CountryModel {
        return state.country;
    }

    @Action(getAllCountriesWithStateManagement)
    getAllCountries(ctx: StateContext<CountriesStateModel>) {
        return this._MainServiceService.getAllCountries().pipe(
            tap((countries) => ctx.patchState({countries}))
        )
    }

    @Action(getCountriesByName)
    getCountriesBySearchName(ctx: StateContext<CountriesStateModel>, body: getCountriesByName ) {
        return this._MainServiceService.getCountriesBySearchName(body.countryName).pipe(
            tap((countries) => ctx.patchState({ countries }))
        )
    }


    @Action(getSingleCountryByName)
    getSingleCountryByName(ctx: StateContext<CountriesStateModel>, body: getSingleCountryByName) {
        return this._MainServiceService.getSingleCountryByName(body.countryName).pipe(
            tap((country) => ctx.patchState({ country }))
        )
    }


    @Action(getCountriesWithRegionName)
    getCountriesWithRegionName(ctx: StateContext<CountriesStateModel>, body: getCountriesWithRegionName) {
        return this._MainServiceService.getCountriesByRegion(body.regionName).pipe(
            tap((countries) => ctx.patchState({ countries }))
        )
    }


}