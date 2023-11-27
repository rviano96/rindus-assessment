import { ICurrentWeather } from "./CurrentWeather.interface";
import { IForecastDay } from "./Forecast.interface";

export interface IWeather {
  current: ICurrentWeather;
  forecast: IForecastDay[];
  // Add other properties as needed
}
