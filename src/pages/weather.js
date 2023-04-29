import React from "react";
import WeatherCard from "../components/WeatherCard";
function weather() {
  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-5 pt-3">
        <div class="...">
          <WeatherCard />
        </div>
        <div class="col-span-3 ...">
          {/* weather details section  */}
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, quia, quae voluptate quod voluptatibus
          voluptates quos quas quibusdam, quia, quae voluptate quod voluptatibus
        </div>
      </div>
    </div>
  );
}

export default weather;
