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
        <Spinner data-testid="spinner" />
      ) : forecast && forecast.length > 0 ? (
        forecast.map((day, index) => (
          <DayForecast key={index} data-testid={`dayForecast`}>
            <DayContainer data-testid={`dayCotainer`}>
              {getDayOfWeek(day.time)}
            </DayContainer>
            <IconContainer data-testid={`iconContainer`}>
              {categorizeWeatherCode(day.weatherCode, 35).icon}
            </IconContainer>
            <TempContainer data-testid={`tempContainer`}>
              <MinContainer data-testid={`minContainer`}>
                {Math.round(day.minTemp)}°
              </MinContainer>
              <MiddleContainer data-testid={`middleContainer`} />
              <MaxContainer data-testid={`maxContainer`}>
                {Math.round(day.maxTemp)}°
              </MaxContainer>
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
