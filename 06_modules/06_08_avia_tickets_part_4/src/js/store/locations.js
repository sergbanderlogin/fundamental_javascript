import api from "../services/apiService";

class Locations {
  constructor(api) {
    this.api = api;
    this.countries = null;
    this.cities = null;
    this.shortCities = {};
    this.lastSearch = {};
    this.airlines = {};
  }
  async init() {
    const response = await Promise.all([
      this.api.countries(),
      this.api.cities(),
      this.api.airlines(),
    ]);

    const [countries, cities, airlines] = response;
    this.countries = this.serializeCountries(countries);
    this.cities = this.serializeCities(cities);
    this.shortCities = this.createShortCities(this.cities);
    this.airlines = this.serializeAirlines(airlines);

    console.log(this.airlines);

    return response;
  }

  getCityCodeByKey(key) {
    return this.cities[key].code;
  }

  getAirlinesNameByCode(code) {
    return this.airlines[code] ? this.airlines[code].name : "";
  }

  getAirlinesLogoByCode(code) {
    return this.airlines[code] ? this.airlines[code] : "";
  }

  createShortCities(cities) {
    return Object.entries(cities).reduce((acc, [key]) => {
      acc[key] = null;
      return acc;
    }, {});
  }

  serializeAirlines(airlines) {
    return airlines.reduce((acc, item) => {
      item.logo = `http://pics.avs.io/200/200/${item.code}.png`;
      item.name = item.name || item.name_translations.en;
      acc[item.code] = item;
      return acc;
    }, {});
  }

  serializeCountries(countries) {
    return countries.reduce((acc, country) => {
      acc[country.code] = country;
      return acc;
    }, {});
  }

  serializeCities(cities) {
    return cities.reduce((acc, city) => {
      const country_name = this.countries[city.country_code].name;
      const key = `${city.name},${country_name}`;
      acc[key] = {
        ...city,
        country_name,
      };
      return acc;
    }, {});
  }

  async fetchTickets(params) {
    const response = await this.api.prices(params);
    this.lastSearch = response.data;
    // серилизовать поиск так что бы внури были название города и страны
  }
}

const locations = new Locations(api);

export default locations;
