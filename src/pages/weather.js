import React from "react";
import WeatherCard from "../components/WeatherCard";
import WindCard from "../components/windCard";
import ProgressCard from "../components/progressCard";
import SunTime from "../components/sunTime";
import ForecastCard from "../components/forecastCard";
function weather() {
  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-5 pt-1">
        <div className="...">
          <WeatherCard />
        </div>
        <div className="col-span-3 rounded-lg container card ">
          <p className="px-3 py-2">Today's Highlight</p>

          {/* weather graph section  */}
          <div className="flex  justify-center">
            <div className="grid grid-cols-4 gap-4 pt-2">
              {/* wind */}
              <WindCard />
              {/* pressure */}
              <WindCard />
              {/* uv */}
              <ProgressCard />
              {/* sunrise to sun set */}
              <SunTime />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 pt-9">
        <div className="...">
          <ForecastCard />
        </div>
        <div className="col-span-3 rounded-lg container card ">
          <p className="px-3 py-2">Today's Highlight</p>

          {/* weather graph section  */}
          <div className="flex  justify-center">
            <div className="grid grid-cols-4 gap-4 pt-2">
              {/* wind */}
              <WindCard />
              {/* pressure */}
              <WindCard />
              {/* uv */}
              <ProgressCard />
              {/* sunrise to sun set */}
              <SunTime />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default weather;
