import React from "react";
import { getGeolocation } from "../lib/geoLocation";
import { useGetCurrentWeatherQuery } from "../store/actions/weatherApi";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";

function Home() {
  const [backgroundImage, setBackgroundImage] = useState("");
  const date = new Date(); // Create a new Date object for the current date
  const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" }); // Get the day of the week in full name format
  const dayOfMonth = date.getDate(); // Get the day of the month
  const monthName = date.toLocaleDateString("en-US", { month: "long" }); // Get the month name in full name format
  const year = date.getFullYear(); // Get the year

  const time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  console.log(`Today is ${dayOfWeek}, ${dayOfMonth} ${monthName} ${year}`);
  console.log(`The current time is ${time}`);

  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  const { data, error, isLoading } = useGetCurrentWeatherQuery({ location });

  useEffect(() => {
    getGeolocation()
      .then((result) => {
        setLocation(result);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);

  useEffect(() => {
    let backgroundImageUrl = "";
    if (data) {
      const weather = data.current.condition.text;
      switch (weather.toLowerCase()) {
        case "clear":
          backgroundImageUrl =
            "https://images.unsplash.com/photo-1623846736569-1d90cba76d65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80";
          break;
        case "clouds":
          backgroundImageUrl =
            "https://images.unsplash.com/photo-1603437873662-dc1f44901825?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
          break;
        case "rain":
          backgroundImageUrl =
            "https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
          break;
        case "snow":
          backgroundImageUrl =
            "https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1208&q=80";
          break;
        case "partly cloudy":
          backgroundImageUrl =
            "https://images.unsplash.com/photo-1529528744093-6f8abeee511d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
          break;
        default:
          backgroundImageUrl =
            "https://images.unsplash.com/photo-1514454529242-9e4677563e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
          break;
      }
      setBackgroundImage(backgroundImageUrl);
    }
  }, [data]);

  if (error) {
    return <div>Something went wrong </div>;
  }
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="Home_container"
    >
      <div className="time_container">
        <div className="time">{time}</div>
        <div className="date">
          {dayOfWeek}, {dayOfMonth} {monthName} {year}
        </div>
      </div>

      {/* //weather */}
      <div className="weather_container">
        <div className="place">{data.location.name}</div>
        <div className="home_weather">{data.current.condition.text}</div>
        <div className="home_temp">
          <sup className="sup">o</sup>
          {data.current.temp_c}
        </div>
      </div>
    </div>
  );
}

export default Home;
