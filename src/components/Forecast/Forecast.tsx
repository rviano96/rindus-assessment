import React, { FC } from "react";
import { IForecast } from "../../types/Forecast.interface";
import {
  ForecastContainer,
  DayForecast,
  DayContainer,
  IconContainer,
  TempContainer,
  MinContainer,
  MiddleContainer,
  MaxContainer,
} from "./Forecast.styles";
import { Spinner } from "../../styles/Global.style";
import { categorizeWeatherCode } from "../../utils/CategorizeWeatherCode";

interface ForecastProps {
  forecast: IForecast[] | undefined;
  isLoading: boolean;
}

const Forecast: FC<ForecastProps> = ({ forecast, isLoading }) => {
  const getDayOfWeek = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { weekday: "long" };
    const date = new Date(dateString);
    const today = new Date();

    if (date.toDateString() === today.toDateString()) {
      return "Today";
    } else {
      return new Intl.DateTimeFormat("en-US", options).format(date);
    }
  };

  return (
    <ForecastContainer>
      {isLoading ? (
        <Spinner />
      ) : forecast && forecast.length > 0 ? (
        forecast.map((day, index) => (
          <DayForecast key={index}>
            <DayContainer>{getDayOfWeek(day.time)}</DayContainer>
            <IconContainer>
              {categorizeWeatherCode(day.weatherCode, 35).icon}
            </IconContainer>
            <TempContainer>
              <MinContainer>{Math.round(day.minTemp)}°</MinContainer>
              <MiddleContainer />
              <MaxContainer>{Math.round(day.maxTemp)}°</MaxContainer>
            </TempContainer>
          </DayForecast>
        ))
      ) : (
        <div>No forecast data available</div>
      )}
    </ForecastContainer>
  );
};

export default Forecast;
