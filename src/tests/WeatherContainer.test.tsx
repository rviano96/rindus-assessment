import { render, screen } from "@testing-library/react";
import React from "react";
import WeatherContainer from "../containers/WeatherContainer";

describe("Weather container Component", () => {
  test("renders loading spinner when isLoading is true", () => {
    render(<WeatherContainer />);
    const spinnerElement = screen.getByTestId("spinner");
    expect(spinnerElement).toBeInTheDocument();
  });
});
