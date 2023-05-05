import React from "react";
import LineCharts from "./graphs/lineChart";

function WindCard() {
  return (
    <div className="container windCard ">
      <div className="px-2">Wind Status</div>
      <div className="rounded-lg  ">
        <LineCharts />
      </div>
    </div>
  );
}

export default WindCard;
