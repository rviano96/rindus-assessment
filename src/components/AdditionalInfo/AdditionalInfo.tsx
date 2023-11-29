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
} from "./AdditionalInfo.styles";
import { Spinner } from "../../styles/Global.style";
import categorizeWeatherCode from "../../utils/CategorizeWeatherCode";
import { IHourly } from "../../types/Hourly.interface";
import { ICurrentWeather } from "../../types/CurrentWeather.interface";

interface AdditionalInfoProps {
  hourly: IHourly[] | undefined;
  current: ICurrentWeather | undefined;
  isLoading: boolean;
}

const AdditionalInfo: FC<AdditionalInfoProps> = ({
  hourly,
  current,
  isLoading,
}) => {
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
      ) : (
        <div>
          {hourly && hourly.length > 0 ? (
            hourly.map((hour, index) => (
              <DayForecast key={index}>
                <DayContainer>{getDayOfWeek(hour.time)}</DayContainer>
                <IconContainer>
                  {categorizeWeatherCode(hour.weatherCode).category}
                </IconContainer>
                <TempContainer>
                  <MinContainer>{hour.temperature}°C</MinContainer>
                  <MiddleContainer />
                  <MaxContainer>{hour.time}°C</MaxContainer>
                </TempContainer>
              </DayForecast>
            ))
          ) : (
            <div>No hourly data available</div>
          )}
          {current ? (
            <div>
              <div>{current.windSpeed}</div>
              <div>{current.humidity}</div>
              <div>{current.precipitation}</div>
              <div>{current.windDirection}</div>
            </div>
          ) : (
            <div>No additional data available</div>
          )}
        </div>
      )}
    </ForecastContainer>
  );
};

export default AdditionalInfo;
