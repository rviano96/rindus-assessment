import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiFog,
  WiShowers,
  WiSnowflakeCold,
} from "react-icons/wi";

type IconType =
  | typeof WiDaySunny
  | typeof WiCloudy
  | typeof WiRain
  | typeof WiSnow
  | typeof WiThunderstorm
  | typeof WiFog
  | typeof WiShowers
  | typeof WiSnowflakeCold;

const categorizeWeatherCode = (
  weatherCode: number
): { category: string; icon: IconType } => {
  // Codes come from: https://open-meteo.com/en/docs WMO Weather interpretation codes (WW) section
  const codeMappings: {
    [key: number]: { category: string; icon: IconType };
  } = {
    0: { category: "Clear sky", icon: WiDaySunny },
    1: { category: "Partly cloudy", icon: WiCloudy },
    2: { category: "Partly cloudy", icon: WiCloudy },
    3: { category: "Partly cloudy", icon: WiCloudy },
    45: { category: "Fog", icon: WiFog },
    48: { category: "Fog", icon: WiFog },
    51: { category: "Drizzle", icon: WiRain },
    53: { category: "Drizzle", icon: WiRain },
    55: { category: "Drizzle", icon: WiRain },
    56: { category: "Freezing Drizzle", icon: WiSnowflakeCold },
    57: { category: "Freezing Drizzle", icon: WiSnowflakeCold },
    61: { category: "Rain", icon: WiRain },
    63: { category: "Rain", icon: WiRain },
    65: { category: "Rain", icon: WiRain },
    66: { category: "Freezing Rain", icon: WiSnowflakeCold },
    67: { category: "Freezing Rain", icon: WiSnowflakeCold },
    71: { category: "Snow fall", icon: WiSnow },
    73: { category: "Snow fall", icon: WiSnow },
    75: { category: "Snow fall", icon: WiSnow },
    77: { category: "Snow grains", icon: WiSnow },
    80: { category: "Rain showers", icon: WiShowers },
    81: { category: "Rain showers", icon: WiShowers },
    82: { category: "Rain showers", icon: WiShowers },
    85: { category: "Snow showers", icon: WiSnow },
    86: { category: "Snow showers", icon: WiSnow },
    95: { category: "Thunderstorm", icon: WiThunderstorm },
    96: { category: "Thunderstorm", icon: WiThunderstorm },
    99: { category: "Thunderstorm", icon: WiThunderstorm },
  };
  if (codeMappings.hasOwnProperty(weatherCode)) {
    return codeMappings[weatherCode];
  } else {
    return { category: "Unknown", icon: WiDaySunny };
  }
};

export default categorizeWeatherCode;
