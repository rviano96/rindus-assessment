import React, { FC, ReactNode } from "react";
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
import categorizeWeatherCode from "../../utils/CategorizeWeatherCode";
import { IconType } from "react-icons";

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

  const iconToReactNode = (icon: IconType): ReactNode =>
    React.createElement(icon);

  return (
    <ForecastContainer>
      {isLoading ? (
        <Spinner />
      ) : forecast && forecast.length > 0 ? (
        forecast.map((day, index) => (
          <DayForecast key={index}>
            <DayContainer>{getDayOfWeek(day.time)}</DayContainer>
            <IconContainer>
              {iconToReactNode(categorizeWeatherCode(day.weatherCode).icon)}
            </IconContainer>
            <TempContainer>
              <MinContainer>{day.minTemp}°C</MinContainer>
              <MiddleContainer />
              <MaxContainer>{day.maxTemp}°C</MaxContainer>
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
