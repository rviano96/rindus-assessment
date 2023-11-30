import { get } from "../api/http.commons";
import { ICity } from "../types/City.interface";
import { IWeather } from "../types/Weather.interface";

export const searchCitiesByName = async (
  cityName: string,
): Promise<ICity[]> => {
  try {
    const response = await get<any>(`search?name=${cityName}`, {
      baseURL: process.env.REACT_APP_GEOCODING_URL,
    });
    const cities: ICity[] = response.results?.map((elem: any) => ({
      id: elem.id,
      name: `${elem.name}${elem.admin1 ? `, ${elem.admin1}` : ""}`,
      country: elem.country,
      longitude: elem.longitude,
      latitude: elem.latitude,
    }));

    return cities;
  } catch (error: any) {
    throw error;
  }
};

export const searchWeatherByCoords = async ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}): Promise<IWeather> => {
  try {
    const url = `forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,wind_direction_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`;

    const response = await get<any>(url, {
      baseURL: process.env.REACT_APP_WEATHER_URL || "",
    });

    const actualHour = new Date(response.current.time).getHours();

    const weatherOject: IWeather = {
      current: {
        temperature: response.current.temperature_2m,
        humidity: response.current.relative_humidity_2m,
        precipitation: response.current.precipitation,
        weatherCode: response.current.weather_code,
        windSpeed: response.current.wind_speed_10m,
        windDirection: response.current.wind_direction_10m,
        maxTemp: response.daily.temperature_2m_max[0],
        minTemp: response.daily.temperature_2m_min[0],
      },
      forecast: response.daily.time.map((day: string, index: number) => ({
        time: day,
        maxTemp: response.daily.temperature_2m_max[index],
        minTemp: response.daily.temperature_2m_min[index],
        weatherCode: response.daily.weather_code[index],
      })),
      hourly: response.hourly.time
        .slice(actualHour, actualHour + 24)
        .map((time: string, index: number) => ({
          time,
          temperature: response.hourly.temperature_2m[index],
          weatherCode: response.hourly.weather_code[index],
        })),
    };

    return weatherOject;
  } catch (error: any) {
    throw error;
  }
};
