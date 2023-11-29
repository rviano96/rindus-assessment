import React from "react";
import { IForecast } from "../../types/Forecast.interface";
import { ChartContainer, DayForecast } from "./Forecast.styles";

interface ForecastProps {
  forecast: IForecast[] | undefined;
}

const Forecast: React.FC<ForecastProps> = ({ forecast }) => {
  return (
    <ChartContainer>
      {forecast?.map((day, index) => (
        <DayForecast key={index}>
          <span>{day.time}</span>
          <span>
            {day.minTemp}°C / {day.maxTemp}°C
          </span>
        </DayForecast>
      ))}
    </ChartContainer>
  );
};

export default Forecast;
