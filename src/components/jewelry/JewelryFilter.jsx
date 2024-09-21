import React from "react";

function JewelryFilter({ title }) {
  return (
    <div className="flex justify-center items-center rounded-[18px] border-[1px] border-solid border-[rgb(221,221,221)] px-3 py-[10px]">
      <div
        style={{
          fontSize: "13px",
          color: "rgb(119, 119, 119)",
          lineHeight: "16px",
        }}
      >
        {title}
      </div>
      <div className="w-4 h-4 bg-[url('https://m.a-bly.com/icon/chip/icon_arrow_down.svg')] ml-1"></div>
    </div>
  );
}

export default JewelryFilter;
