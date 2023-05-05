import React from "react";

function SemiCircleGraph({ value }) {
  return (
    <div
      role="progressbar"
      aria-valuenow={value || 0}
      aria-valuemin="0"
      aria-valuemax="100"
      style={{ "--value": `${value}` }}
      
    ></div>
  );
}

export default SemiCircleGraph;
