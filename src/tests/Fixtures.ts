import { ICity } from "../types/City.interface";
import { ICurrentWeather } from "../types/CurrentWeather.interface";
import { IForecast } from "../types/Forecast.interface";
import { IHourly } from "../types/Hourly.interface";
import { IWeather } from "../types/Weather.interface";

export const cityFixture: ICity = {
  id: 1,
  name: "City test",
  latitude: 35.6895,
  longitude: 139.6917,
  country: "Country test",
};

export const currentWeatherFixture: ICurrentWeather = {
  temperature: 25,
  humidity: 50,
  precipitation: 5,
  weatherCode: 1,
  windSpeed: 10,
  windDirection: 180,
  maxTemp: 30,
  minTemp: 20,
};

export const forecastFixture1: IForecast = {
  time: "2023-12-01T12:00:00",
  minTemp: 22,
  maxTemp: 28,
  weatherCode: 2,
};

export const forecastFixture2: IForecast = {
  time: "2023-12-02T12:00:00",
  minTemp: 18,
  maxTemp: 28,
  weatherCode: 1,
};

export const forecastFixture3: IForecast = {
  time: "2023-12-03T12:00:00",
  minTemp: 22,
  maxTemp: 32,
  weatherCode: 2,
};

export const hourlyFixture1: IHourly = {
  time: "2023-12-01T14:00:00",
  temperature: 6,
  weatherCode: 2,
};
export const hourlyFixture2: IHourly = {
  time: "2023-12-01T15:00:00",
  temperature: 26,
  weatherCode: 1,
};
export const hourlyFixture3: IHourly = {
  time: "2023-12-01T16:00:00",
  temperature: 20,
  weatherCode: 3,
};

export const weatherFixture: IWeather = {
  current: currentWeatherFixture,
  forecast: [forecastFixture1, forecastFixture2, forecastFixture3],
  hourly: [hourlyFixture1, hourlyFixture2, hourlyFixture3],
};
