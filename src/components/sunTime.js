import React from "react";
import SunGraph from "./graphs/sunGraph";

function sunTime() {
  return (
    <div className="container windCard ">
      <div className="px-2">sun time</div>
      <div className="rounded-lg  ">
        <SunGraph currentTime={10}  />
      </div>
    </div>
  );
}

export default sunTime;
