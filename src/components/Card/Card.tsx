import React from "react";
import { Temperature, CardContainer, WeatherDescription } from "./Card.styles";
import { ICurrentWeather } from "../../types/CurrentWeather.interface";

interface CardProps {
  currentWeather: ICurrentWeather | undefined;
}

const Card: React.FC<CardProps> = ({ currentWeather }) => {
  return (
    <CardContainer>
      {/* <WeatherIcon src={weather.iconUrl} alt={weather.description} /> */}
      <Temperature>{currentWeather?.temperature}°C</Temperature>
      <WeatherDescription>{currentWeather?.description}</WeatherDescription>

      {/* <ForecastContainer>
            {forecast.map((dayForecast, index) => (
              <ForecastDay key={index}>
                <span>{dayForecast.day}</span>
                <span>{dayForecast.minTemp}°C / {dayForecast.maxTemp}°C</span>
                <WeatherIcon src={dayForecast.iconUrl} alt={dayForecast.description} />
              </ForecastDay>
            ))}
          </ForecastContainer> */}
    </CardContainer>
  );
};

export default Card;
