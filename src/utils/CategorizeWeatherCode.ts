import React, { ReactNode } from "react";

import {
  WiDaySunny,
  WiDaySunnyOvercast,
  WiDayCloudy,
  WiCloudy,
  WiFog,
  WiRainMix,
  WiRainWind,
  WiSnow,
  WiRain,
  WiSnowflakeCold,
  WiShowers,
  WiThunderstorm,
  //--Night icons--//
  WiNightClear,
  WiNightAltCloudy,
  WiNightAltPartlyCloudy,
  WiNightFog,
} from "react-icons/wi";

type IconType =
  | typeof WiRainMix
  | typeof WiDaySunnyOvercast
  | typeof WiDayCloudy
  | typeof WiCloudy
  | typeof WiRain
  | typeof WiSnow
  | typeof WiShowers
  | typeof WiFog
  | typeof WiRainWind
  | typeof WiSnowflakeCold
  | typeof WiThunderstorm
  | typeof WiNightClear
  | typeof WiNightFog
  | typeof WiNightAltCloudy
  | typeof WiNightAltPartlyCloudy
  | typeof WiDaySunny;

export const categorizeWeatherCode = (
  weatherCode: number,
  size: string | number = 24,
  night: boolean = false
): { category: string; icon: ReactNode } => {
  // Codes come from: https://open-meteo.com/en/docs WMO Weather interpretation codes (WW) section
  const codeMappings: {
    [key: number]: {
      category: string;
      icon: ReactNode;
    };
  } = {
    0: {
      category: "Clear sky",
      icon: iconToReactNode(night ? WiNightClear : WiDaySunny, size),
    },
    1: {
      category: "Mainly clear",
      icon: iconToReactNode(
        night ? WiNightAltCloudy : WiDaySunnyOvercast,
        size
      ),
    },
    2: {
      category: "Partly cloudy",
      icon: iconToReactNode(night ? WiNightAltPartlyCloudy : WiDayCloudy, size),
    },
    3: {
      category: "Overcast",
      icon: iconToReactNode(night ? WiNightAltCloudy : WiCloudy, size),
    },
    45: {
      category: "Fog",
      icon: iconToReactNode(night ? WiNightFog : WiFog, size),
    },
    48: {
      category: "Fog",
      icon: iconToReactNode(night ? WiNightFog : WiFog, size),
    },
    51: { category: "Light drizzle", icon: iconToReactNode(WiRainMix, size) },
    53: {
      category: "Moderate drizzle",
      icon: iconToReactNode(WiRainWind, size),
    },
    55: { category: "Dense drizzle", icon: iconToReactNode(WiRainWind, size) },
    56: { category: "Freezing drizzle", icon: iconToReactNode(WiSnow, size) },
    57: { category: "Freezing drizzle", icon: iconToReactNode(WiSnow, size) },
    61: { category: "Slight rain", icon: iconToReactNode(WiRain, size) },
    63: { category: "Moderate rain", icon: iconToReactNode(WiRain, size) },
    65: { category: "Heavy rain", icon: iconToReactNode(WiRain, size) },
    66: { category: "Freezing Rain", icon: iconToReactNode(WiRainMix, size) },
    67: { category: "Freezing Rain", icon: iconToReactNode(WiRainMix, size) },
    71: { category: "Snow fall", icon: iconToReactNode(WiSnowflakeCold, size) },
    73: { category: "Snow fall", icon: iconToReactNode(WiSnowflakeCold, size) },
    75: { category: "Snow fall", icon: iconToReactNode(WiSnowflakeCold, size) },
    77: {
      category: "Snow grains",
      icon: iconToReactNode(WiSnowflakeCold, size),
    },
    80: {
      category: "Slight showers",
      icon: iconToReactNode(WiShowers, size),
    },
    81: {
      category: "Moderate showers",
      icon: iconToReactNode(WiShowers, size),
    },
    82: {
      category: "Violent showers",
      icon: iconToReactNode(WiShowers, size),
    },
    85: {
      category: "Slight snow",
      icon: iconToReactNode(WiSnowflakeCold, size),
    },
    86: {
      category: "Heavy snow",
      icon: iconToReactNode(WiSnowflakeCold, size),
    },
    95: {
      category: "Thunderstorm",
      icon: iconToReactNode(WiThunderstorm, size),
    },
    96: {
      category: "Thunderstorm",
      icon: iconToReactNode(WiThunderstorm, size),
    },
    99: {
      category: "Thunderstorm",
      icon: iconToReactNode(WiThunderstorm, size),
    },
  };
  if (codeMappings.hasOwnProperty(weatherCode)) {
    return codeMappings[weatherCode];
  } else {
    return {
      category: "Unknown",
      icon: iconToReactNode(WiThunderstorm, size),
    };
  }
};

const iconToReactNode = (
  icon: IconType,
  size: string | number = 24
): ReactNode => React.createElement(icon, { size });
