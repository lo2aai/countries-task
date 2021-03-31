export class getAllCountriesWithStateManagement {
    static readonly type = '[Countries] Get All Countries';
}

export class getCountriesByName {
    static readonly type = '[Countries] Get All Countries By Name';
    constructor(public countryName: string) { }
}

export class getSingleCountryByName {
    static readonly type = '[Countries] Get Single Country By Name';
    constructor(public countryName: string) { }
}

export class getCountriesWithRegionName {
    static readonly type = '[Countries] Get Countries By Region Name';
    constructor(public regionName: string) { }
}