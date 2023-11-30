import React from "react";
import { render, screen } from "@testing-library/react";
import { currentWeatherFixture } from "./Fixtures";
import Card from "../components/Card/Card";

const mockCurrentWeather = currentWeatherFixture;
const mockCity = "Istanbul";

describe("Card Component", () => {
  test("renders loading spinner when isLoading is true", () => {
    render(
      <Card
        city={mockCity}
        currentWeather={mockCurrentWeather}
        isLoading={true}
      />
    );
    const spinnerElement = screen.getByTestId("spinner");
    expect(spinnerElement).toBeInTheDocument();
  });

  test("renders data correctly when isLoading is false", () => {
    render(
      <Card
        city={mockCity}
        currentWeather={mockCurrentWeather}
        isLoading={false}
      />
    );

    const cityElement = screen.getByText(mockCity);
    const temperatureElement = screen.getByText(
      `${mockCurrentWeather.temperature}°`
    );
    const maxTempElement = screen.getByText(
      `Max: ${Math.round(mockCurrentWeather.maxTemp)}°`
    );
    const minTempElement = screen.getByText(
      `Min: ${Math.round(mockCurrentWeather.minTemp)}°`
    );

    expect(cityElement).toBeInTheDocument();
    expect(temperatureElement).toBeInTheDocument();
    expect(maxTempElement).toBeInTheDocument();
    expect(minTempElement).toBeInTheDocument();
  });

  test("renders 'no data available' message when currentWeather is undefined", () => {
    render(
      <Card city={mockCity} currentWeather={undefined} isLoading={false} />
    );
    const noDataElement = screen.getByText(/There's no data available/i);
    expect(noDataElement).toBeInTheDocument();
  });

  test("renders 'no data available' message when city is undefined", () => {
    render(
      <Card
        city={undefined}
        currentWeather={mockCurrentWeather}
        isLoading={false}
      />
    );
    const noDataElement = screen.getByText(/There's no data available/i);
    expect(noDataElement).toBeInTheDocument();
  });
});
