import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const WEATHER_API_KEY ="34ac5a2b0ac3446582c80225232104"

console.log(WEATHER_API_KEY);

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.weatherapi.com/v1/",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Allow-Control-Allow-Origin": "*",
    },
  }),
  endpoints: (builder) => ({ 
    getCurrentWeather: builder.query({
      query: ({ location }) =>
        `/current.json?key=${WEATHER_API_KEY}&q=${location.latitude},${location.longitude}&aqi=no`,
    }),
    getWeatherForecast: builder.query({
      query: ({ location }) =>
        `/forecast.json?key=${WEATHER_API_KEY}&q=${location.latitude},${location.longitude}&days=3&aqi=no&alerts=no`,
    }),

    //without latitude and longitude
    getCurrentWeatherWithoutLatLong: builder.query({
      query: ({ location }) =>
        `/current.json?key=${WEATHER_API_KEY}&q=${location}&aqi=no`,
    }),
    getWeatherForecastWithoutLatLong: builder.query({
      query: ({ location }) =>
        `/forecast.json?key=${WEATHER_API_KEY}&q=${location}&days=3&aqi=no&alerts=no`,
    }),
  }),
});

// Path: src\store\store.js
export const {
  useGetCurrentWeatherQuery,
  useGetWeatherForecastQuery,
  useGetCurrentWeatherWithoutLatLongQuery,
  useGetWeatherForecastWithoutLatLongQuery,
} = weatherApi;
