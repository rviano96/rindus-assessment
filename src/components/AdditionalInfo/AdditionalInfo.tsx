import React, { FC } from "react";
import {
  AdditionalInfoContainer,
  Forecast,
  HourlyContainer,
  Container,
  Info,
  Top,
  Medium,
  Bottom,
} from "./AdditionalInfo.styles";
import { Spinner } from "../../styles/Global.style";
import { IHourly } from "../../types/Hourly.interface";
import { ICurrentWeather } from "../../types/CurrentWeather.interface";
import { categorizeWeatherCode } from "../../utils/CategorizeWeatherCode";

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
  const getHour = (dateString: string, index: number): string => {
    const inputDate = new Date(dateString);

    if (index === 0) {
      return "Now";
    } else {
      const formattedHour = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        hour12: false,
      }).format(inputDate);

      return formattedHour;
    }
  };

  const isNight = (dateString: string): boolean => {
    const hour = getHour(dateString, 1);
    return hour >= "19" || hour < "07";
  };

  const degreesToCardinal = (degrees: number): string => {
    const cardinalDirections = [
      "North",
      "NE",
      "East",
      "SE",
      "South",
      "SW",
      "West",
      "NW",
    ];

    const normalizedDegrees = (degrees + 360) % 360;

    const index = Math.round(normalizedDegrees / 45) % 8;

    return cardinalDirections[index];
  };

  return (
    <AdditionalInfoContainer>
      {isLoading ? (
        <Spinner data-testid="spinner" />
      ) : (
        <>
          {hourly && hourly.length > 0 ? (
            <HourlyContainer>
              {hourly.map((hour, index) => (
                <Forecast key={index}>
                  <Top>{getHour(hour.time, index)}</Top>
                  <Medium>
                    {
                      categorizeWeatherCode(
                        hour.weatherCode,
                        35,
                        isNight(hour.time)
                      ).icon
                    }
                  </Medium>
                  <Bottom>{Math.round(hour.temperature)}°</Bottom>
                </Forecast>
              ))}
            </HourlyContainer>
          ) : (
            <div>No hourly data available</div>
          )}
          {current ? (
            <Container>
              <Info>
                <Top>Wind</Top>
                <Medium>{current.windSpeed} km/h</Medium>
                <Bottom>{degreesToCardinal(current.windDirection)}</Bottom>
              </Info>
              <Info>
                <Top>Humidity</Top>
                <Medium>{current.humidity} %</Medium>
              </Info>
              <Info>
                <Top>Precipitations</Top>
                <Medium>{current.precipitation} mm</Medium>
                <Bottom>In the last 24 hours</Bottom>
              </Info>
            </Container>
          ) : (
            <div>No additional data available</div>
          )}
        </>
      )}
    </AdditionalInfoContainer>
  );
};

export default AdditionalInfo;
