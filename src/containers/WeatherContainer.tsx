import React, { useCallback, useEffect, useState } from "react";
import { IWeather } from "../types/Weather.interface";
// import { ICurrentWeather } from "../types/HourlyWeather.interface";
// import { IForecastDay } from "../types/Forecast.interface";
import {
  CloseIcon,
  Container,
  IconContainer,
  Input,
  InputContainer,
  SearchContainer,
} from "./WeatherContainer.styles";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import useDebounce from "../utils/Debounce";
import WeatherCard from "../components/Card/Card";
import ForecastWeather from "../components/Forecast/Forecast";
import {
  searchCitiesByName,
  searchWeatherByCoords,
} from "../services/Weather.service";
import { ICity } from "../types/City.interface";

interface Coords {
  latitude: number;
  longitude: number;
}

const WeatherContainer: React.FC = () => {
  const [weather, setWeather] = useState<IWeather>();
  const [searchText, setSearchText] = React.useState<string>("");
  const [isError, setIsError] = React.useState<boolean>(false);
  const [isSearching, setIsSearching] = React.useState<boolean>(false);
  const debouncedSearch = useDebounce<string>(searchText, 500);
  const [cities, setCities] = useState<ICity[]>([]);
  const [selectedCity, setSelectedCity] = useState<string | undefined>(
    undefined,
  );

  const [coords, setCoords] = useState<Coords | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getWeather = (latitude?: number, longitude?: number, city?: ICity) => {
    setIsSearching(true);
    setIsError(false);
    if (city) {
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
          setIsSearching(false);
        });
    } else {
      if (latitude && longitude) {
        searchWeatherByCoords({ latitude, longitude })
          .then((response: IWeather) => {
            setWeather(response);
          })
          .catch((e: Error) => {
            console.log(e);
            setIsError(true);
          })
          .finally(() => {
            setIsSearching(false);
          });
      }
    }
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
        },
      );
    } else {
      setError("Geolocation is not supported.");
    }
  }, []);

  useEffect(() => {
    if (coords) {
      setIsSearching(true);
      setIsError(false);
      setSelectedCity("Your current location");
      getWeather(coords.latitude, coords.longitude);
    }
  }, [coords]);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(event.target.value);
    },
    [],
  );

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
      </SearchContainer>
      <WeatherCard city={selectedCity} currentWeather={weather?.current} />
      <ForecastWeather forecast={weather?.forecast}></ForecastWeather>
    </Container>
  );
};

export default WeatherContainer;
