import { IHourlyWeather } from "./HourlyWeather.interface";
import { IForecast } from "./Forecast.interface";
import { ICurrentWeather } from "./CurrentWeather.interface";

export interface IWeather {
  current: ICurrentWeather;
  forecast: IForecast[];
  hourly: IHourlyWeather[];
}
