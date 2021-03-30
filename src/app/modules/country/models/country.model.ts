export interface CountryModel {
    name: string,
    nativeName: string,
    population: number,
    region: string,
    subregion: string,
    capital: string,
    topLevelDomain: string[],
    currencies: string[],
    languages: string[]
}