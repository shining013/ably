import React from "react";

function RecommendBox() {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            flexBasis: "100%",
            height: "1px",
            minHeight: "1px",
            backgroundColor: "#EEE",
          }}
        ></div>
      </div>
      <div
        className="flex items-center justify-between"
        style={{ padding: "24px 16px" }}
      >
        <p className="overflow-hidden m-0 text-h5">회원님을 위한 추천 상품</p>
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

export default RecommendBox;
