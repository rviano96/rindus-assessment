import React from "react";
import { render, screen } from "@testing-library/react";
import AdditionalInfo from "../components/AdditionalInfo/AdditionalInfo";
import { currentWeatherFixture, hourlyFixture1 } from "./Fixtures";

const mockHourlyData = [hourlyFixture1];

const mockCurrentData = currentWeatherFixture;

describe("AdditionalInfo component", () => {
  it("renders hourly data when available", () => {
    render(
      <AdditionalInfo
        hourly={mockHourlyData}
        current={mockCurrentData}
        isLoading={false}
      />
    );

    expect(screen.getByText(/Now/i)).toBeInTheDocument();
    expect(screen.getByText(/Wind/i)).toBeInTheDocument();
    expect(screen.getByText(/Humidity/i)).toBeInTheDocument();
    expect(screen.getByText(/Precipitations/i)).toBeInTheDocument();

    const humidity = screen.getByText(`${mockCurrentData.humidity} %`);
    const precipitations = screen.getByText(
      `${mockCurrentData.precipitation} mm`
    );
    const wind = screen.getByText(`${mockCurrentData.windSpeed} km/h`);
    const windDirection = screen.getByText(/South/i);

    expect(humidity).toBeInTheDocument();
    expect(precipitations).toBeInTheDocument();
    expect(wind).toBeInTheDocument();
    expect(windDirection).toBeInTheDocument();
  });

  it("renders 'No hourly data available' when hourly data is not available", () => {
    render(
      <AdditionalInfo hourly={[]} current={mockCurrentData} isLoading={false} />
    );

    expect(screen.getByText(/No hourly data available/i)).toBeInTheDocument();
  });

  it("renders 'No additional data available' when current data is not available", () => {
    render(
      <AdditionalInfo
        hourly={mockHourlyData}
        current={undefined}
        isLoading={false}
      />
    );

    expect(
      screen.getByText(/No additional data available/i)
    ).toBeInTheDocument();
  });

  it("renders the spinner when loading", () => {
    render(<AdditionalInfo hourly={[]} current={undefined} isLoading={true} />);

    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });
});
