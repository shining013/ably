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
      <div>추천상품 </div>
    </div>
  );
}

export default RecommendBox;
