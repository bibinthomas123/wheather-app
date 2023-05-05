import React from "react";

import CloudyImage from "../assests/weatherIcons/cloudy.png";
import RainyImage from "../assests/images/rainy.jpg";

const WeatherCard = ({ city, condition, temperature, time }) => {
  return (
    <div className="container card rounded-lg px-4 py-4">
      <div className="image_container">
        <img src={RainyImage} alt="re4tert" />
      </div>
     
      <div className="container flex flex-col justify-start pt-12 ">
        <img src={CloudyImage} className="image" alt="re4tert" />
        <div className="degree_weather">
          28<sup>o</sup>c
        </div>
        <div className="weather_desc">
          {" "}
          <i className="bx bx-cloud-rain pr-1"></i>Rainy storm
        </div>
      </div>
      <div className="flex flex-col justify-start py-6 ">
        <span className="weatherCard_place">
          <i className="bx bx-map px-2"></i>Secundrabad
        </span>
        <span className="weatherCard_time ">
          <i className="bx bx-calendar-week px-2"></i>29 July,2023 09:58 AM
        </span>
      </div>
    </div>
  );
};

export default WeatherCard;
