import React from "react";
import { render, screen } from "@testing-library/react";
import Forecast from "../components/Forecast/Forecast";
import {
  forecastFixture1,
  forecastFixture2,
  forecastFixture3,
} from "./Fixtures";

const mockForecast = [forecastFixture1, forecastFixture2, forecastFixture3];

describe("Forecast Component", () => {
  test("renders loading spinner when isLoading is true", () => {
    render(<Forecast forecast={undefined} isLoading={true} />);
    const spinnerElement = screen.getByTestId("spinner");
    expect(spinnerElement).toBeInTheDocument();
  });

  test("renders forecast data correctly when isLoading is false", () => {
    render(<Forecast forecast={mockForecast} isLoading={false} />);

    const dayElems = screen.getAllByTestId("dayForecast");
    const containerElems = screen.getAllByTestId("dayCotainer");
    const icons = screen.getAllByTestId("iconContainer");
    const tempContainers = screen.getAllByTestId("tempContainer");
    const minElems = screen.getAllByTestId("minContainer");
    const middleElems = screen.getAllByTestId("middleContainer");
    const maxTempElems = screen.getAllByTestId("maxContainer");

    expect(dayElems.length).toBe(mockForecast.length);
    expect(containerElems.length).toBe(mockForecast.length);
    expect(icons.length).toBe(mockForecast.length);
    expect(tempContainers.length).toBe(mockForecast.length);
    expect(minElems.length).toBe(mockForecast.length);
    expect(middleElems.length).toBe(mockForecast.length);
    expect(maxTempElems.length).toBe(mockForecast.length);

    mockForecast.forEach((day, index) => {
      expect(minElems[index]).toHaveTextContent(`${Math.round(day.minTemp)}°`);
      expect(maxTempElems[index]).toHaveTextContent(
        `${Math.round(day.maxTemp)}°`
      );
    });
  });

  test("renders 'no forecast data available' message when forecast is undefined", () => {
    render(<Forecast forecast={undefined} isLoading={false} />);
    const noDataElement = screen.getByText(/No forecast data available/i);
    expect(noDataElement).toBeInTheDocument();
  });
});
