import React from "react";
import CloudyImage from "../assests/weatherIcons/cloudy.png";

function ForecastCard() {

  return (
    <div className="container card rounded-lg px-4 py-4">
      <p className="text-xl py-2 font-bold">Forecast</p>
      <div className="container flex  justify-around py-2 list-none">
        <li className="flex flex-row items-center">
          <img src={CloudyImage} width={34} alt="re4tert" />
          <span>
            24<sup>o</sup>c
          </span>
        </li>
        <li>25 july</li>
        <li>Tuesday</li>
      </div>
      <div className="container flex  justify-around py-2 list-none">
        <li className="flex flex-row items-center">
          <img src={CloudyImage} width={34} alt="re4tert" />
          <span>
            24<sup>o</sup>c
          </span>
        </li>
        <li>25 july</li>
        <li>Tuesday</li>
      </div>
      <div className="container flex  justify-around py-2 list-none">
        <li className="flex flex-row items-center">
          <img src={CloudyImage} width={34} alt="re4tert" />
          <span>
            24<sup>o</sup>c
          </span>
        </li>
        <li>25 july</li>
        <li>Tuesday</li>
      </div>
      <div className="container flex  justify-around py-2 list-none">
        <li className="flex flex-row items-center">
          <img src={CloudyImage} width={34} alt="re4tert" />
          <span>
            24<sup>o</sup>c
          </span>
        </li>
        <li>25 july</li>
        <li>Tuesday</li>
      </div>
      <div className="container flex  justify-around py-2 list-none">
        <li className="flex flex-row items-center">
          <img src={CloudyImage} width={34} alt="re4tert" />
          <span>
            24<sup>o</sup>c
          </span>
        </li>
        <li>25 july</li>
        <li>Tuesday</li>
      </div>
      <div className="container flex  justify-around py-2 list-none">
        <li className="flex flex-row items-center">
          <img src={CloudyImage} width={34} alt="re4tert" />
          <span>
            24<sup>o</sup>c
          </span>
        </li>
        <li>25 july</li>
        <li>Tuesday</li>
      </div>
    </div>
  );
}

export default ForecastCard;
