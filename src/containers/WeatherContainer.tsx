import React, { useEffect, useState } from "react";
import { IWeather } from "../types/Weather.interface";
import WeatherCard from "../components/Card/Card";
import ForecastWeather from "../components/Forecast/Forecast";
import { ICurrentWeather } from "../types/CurrentWeather.interface";
import { IForecastDay } from "../types/Forecast.interface";

const WeatherContainer: React.FC = () => {
  const [weather, setWeather] = useState<IWeather>();
  useEffect(() => {
    const currentWeather: ICurrentWeather = {
      temperature: 25,
      description: "Sunny",
      minTemp: 10,
      maxTemp: 30,
      humidity: 50,
      windWpeed: 10,
      type: "sunny",
    };

    const forecast: IForecastDay[] = [
      {
        day: "Monday",
        minTemp: 20,
        maxTemp: 30,
        description: "Sunny",
        type: "Sunny",
      },
      {
        day: "Tuesday",
        minTemp: 18,
        maxTemp: 28,
        description: "Cloudy",
        type: "Cloudy",
      },
    ];
    setWeather({current: currentWeather, forecast})
  }, []);
  return (
    <>
      <WeatherCard currentWeather={weather?.current}></WeatherCard>
      <ForecastWeather forecast={weather?.forecast}></ForecastWeather>
    </>
  );
};

export default WeatherContainer;
