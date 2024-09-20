import React from "react";

function JewelryFilter({ title }) {
  return (
    <div className="flex justify-center items-center ">
      <div style={{ fontSize: "13px", color: "rgb(119, 119, 119)" }}>
        {title}
      </div>
    </div>
  );
}

export default JewelryFilter;
