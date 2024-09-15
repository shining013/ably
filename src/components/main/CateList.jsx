import React from "react";
import { WidthProvider } from "react-grid-layout";

function CateList() {
  return (
    <div
      className="grid grid-cols-5 p-2 justify-items-center w-full items-center gap-x-2"
      style={{ height: "140px" }}
    >
      <div style={{ width: "62px", height: "58px" }}>
        <div style={{ width: "34px", height: "34px" }}>
          <img src="./images/Cate1.png" />
          <p className="body5 h-14">남자패션</p>
        </div>
      </div>
    </div>
  );
}

export default CateList;
