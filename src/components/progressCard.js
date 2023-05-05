import React from "react";
import SemiCircleGraph from "./graphs/semiGraph";

function progressCard() {
  return (
    <div className="container windCard items-center">
      <div className="">UV</div>
      <div className="rounded-lg ">
        <SemiCircleGraph value={7} />
      </div>
    </div>
  );
}

export default progressCard;
