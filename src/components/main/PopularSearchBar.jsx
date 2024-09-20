import React from "react";

function PopularSearchBar() {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}></div>
      <div
        className="flex items-center justify-between"
        style={{ padding: "24px 16px" }}
      >
        <p className="overflow-hidden m-0 text-h3">인기 검색어</p>
        <p
          className="font-normal"
          style={{
            letterSpacing: "-.4px",
            lineHeight: "18px",
            fontSize: "14px",
            fontWeight: "400",
          }}
        >
          <span style={{ color: "#dddddd" }}>sponsored</span>
        </p>
      </div>
    </div>
  );
}

export default PopularSearchBar;
