import React from "react";
import { SpanContainer, CardContainer, MaxMinContainer } from "./Card.styles";
import { ICurrentWeather } from "../../types/CurrentWeather.interface";
import categorizeWeatherCode from "../../utils/CategorizeWeatherCode";

interface CardProps {
  city: string | undefined;
  currentWeather: ICurrentWeather | undefined;
}

const Card: React.FC<CardProps> = ({ city, currentWeather }) => {
  return (
    <>
      {currentWeather && city ? (
        <CardContainer>
          <SpanContainer>{city}</SpanContainer>
          <SpanContainer>{currentWeather.temperature} °C</SpanContainer>
          <SpanContainer secondary={true}>
            {categorizeWeatherCode(currentWeather.weatherCode).category}
          </SpanContainer>
          <MaxMinContainer>
            <SpanContainer marginright={"0.5rem"}>
              Max: {currentWeather.maxTemp}
            </SpanContainer>
            <SpanContainer marginleft={"0.5rem"}>
              Min: {currentWeather.minTemp}
            </SpanContainer>
          </MaxMinContainer>
        </CardContainer>
      ) : (
        <div>There's no data available</div>
      )}
    </>
  );
};

export default Card;
