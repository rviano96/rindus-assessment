import React, { FC, useCallback, useEffect, useState } from "react";
import { IWeather } from "../types/Weather.interface";

import {
  CloseIcon,
  Container,
  Dropdown,
  FlexContainer,
  IconContainer,
  Input,
  InputContainer,
  Item,
  SearchContainer,
} from "./WeatherContainer.styles";
import { FaSearch } from "react-icons/fa";
import useDebounce from "../utils/Debounce";
import WeatherCard from "../components/Card/Card";
import ForecastWeather from "../components/Forecast/Forecast";
import {
  searchCitiesByName,
  searchWeatherByCoords,
} from "../services/Weather.service";
import { ICity } from "../types/City.interface";
import { Spinner } from "../styles/Global.style";

interface Coords {
  latitude: number;
  longitude: number;
}

const WeatherContainer: FC = () => {
  const [weather, setWeather] = useState<IWeather>();
  const [searchText, setSearchText] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const debouncedSearch = useDebounce<string>(searchText, 500);
  const [cities, setCities] = useState<ICity[]>([]);
  const [selectedCity, setSelectedCity] = useState<ICity | undefined>(
    undefined
  );
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const [coords, setCoords] = useState<Coords | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getWeather = (city: ICity) => {
    setIsLoading(true);
    setIsError(false);

    searchWeatherByCoords({
      latitude: city.latitude,
      longitude: city.longitude,
    })
      .then((response: IWeather) => {
        setWeather(response);
      })
      .catch((e: Error) => {
        console.log(e);
        setIsError(true);
        setError(e.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const getCities = (searchText?: string) => {
    if (searchText) {
      setIsSearching(true);
      setIsError(false);
      searchCitiesByName(searchText)
        .then((response: ICity[]) => {
          setCities(response);
        })
        .catch((e: Error) => {
          console.log(e);
          setIsError(true);
          setError(e.message);
        })
        .finally(() => {
          setIsSearching(false);
        });
    } else {
      setCities([]);
    }
  };

  useEffect(() => {
    getCities(debouncedSearch);
  }, [debouncedSearch]);

  const cancelSearch = () => {
    setSearchText("");
    setShowDropdown(false);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoords({ latitude, longitude });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported.");
    }
  }, []);

  useEffect(() => {
    if (coords) {
      setIsSearching(true);
      setIsError(false);
      setSelectedCity({ name: "Your current location", ...coords });
    }
  }, [coords]);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(event.target.value);
      setShowDropdown(event.target.value.length > 0);
    },
    []
  );

  useEffect(() => {
    if (selectedCity) {
      getWeather(selectedCity);
    }
  }, [selectedCity]);

  return (
    <Container>
      <SearchContainer>
        <InputContainer>
          <IconContainer>
            {" "}
            {searchText ? <CloseIcon onClick={cancelSearch} /> : <FaSearch />}
          </IconContainer>
          <Input
            value={searchText}
            placeholder="Search..."
            type="text"
            onChange={handleInputChange}
          />
        </InputContainer>
        <Dropdown visible={showDropdown}>
          {isSearching && (
            <FlexContainer>
              <Spinner />
            </FlexContainer>
          )}

          {!isSearching && !cities.length ? (
            <FlexContainer>Oops.. Try with other location :) </FlexContainer>
          ) : (
            cities?.map((city: ICity, idx: number) => (
              <Item
                key={idx}
                onClick={() => {
                  setSelectedCity(city);
                  cancelSearch();
                }}
              >
                {" "}
                {city.name}, {city.country}
              </Item>
            ))
          )}
        </Dropdown>
      </SearchContainer>
      <WeatherCard
        city={selectedCity?.name}
        currentWeather={weather?.current}
        isLoading={isLoading}
      />
      <ForecastWeather
        forecast={weather?.forecast}
        isLoading={isLoading}
      ></ForecastWeather>
    </Container>
  );
};

export default WeatherContainer;
