import React, { FC } from "react";
import { SpanContainer, CardContainer, MaxMinContainer } from "./Card.styles";
import { ICurrentWeather } from "../../types/CurrentWeather.interface";
import { Spinner } from "../../styles/Global.style";
import { categorizeWeatherCode } from "../../utils/CategorizeWeatherCode";

interface CardProps {
  city: string | undefined;
  currentWeather: ICurrentWeather | undefined;
  isLoading: boolean;
}

const Card: FC<CardProps> = ({ city, currentWeather, isLoading }) => {
  return (
    <CardContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {currentWeather && city ? (
            <>
              <SpanContainer>{city}</SpanContainer>
              <SpanContainer>{currentWeather.temperature}°</SpanContainer>
              <SpanContainer $secondary={true}>
                {categorizeWeatherCode(currentWeather.weatherCode).category}
              </SpanContainer>
              <MaxMinContainer>
                <SpanContainer $marginright={"0.5rem"}>
                  Max: {Math.round(currentWeather.maxTemp)}°
                </SpanContainer>
                <SpanContainer $marginleft={"0.5rem"}>
                  Min: {Math.round(currentWeather.minTemp)}°
                </SpanContainer>
              </MaxMinContainer>
            </>
          ) : (
            <div>There's no data available</div>
          )}
        </>
      )}
    </CardContainer>
  );
};

export default Card;
