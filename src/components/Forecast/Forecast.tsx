import React from "react";
import { IForecastDay } from "../../types/Forecast.interface";
import { ChartContainer, DayForecast } from "./Forecast.styles";

interface ForecastProps {
  forecast: IForecastDay[] | undefined;
}

const Forecast: React.FC<ForecastProps> = ({ forecast }) => {
  return (
    <ChartContainer>
      {forecast?.map((day, index) => (
        <DayForecast key={index}>
          <span>{day.day}</span>
          <span>
            {day.minTemp}°C / {day.maxTemp}°C
          </span>
        </DayForecast>
      ))}
    </ChartContainer>
  );
};

export default Forecast;
