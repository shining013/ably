import React from "react";
import JewelryType from "../components/jewelry/JewelryType";

const JewelryPage = () => {
  return (
    <div style={{ paddingTop: "120px" }}>
      <div className="flex h-10" style={{ backgroundColor: "black" }}></div>
      <div className="grid grid-cols-5 p-3 gap-5">
        <JewelryType
          imgsrc={"https://img.a-bly.com/categories/four_col_sub/265.jpg"}
          typeName={"귀걸이"}
        />
        <JewelryType
          imgsrc={"https://img.a-bly.com/categories/four_col_sub/266.jpg"}
          typeName={"목걸이"}
        />
        <JewelryType
          imgsrc={"https://img.a-bly.com/categories/four_col_sub/267.jpg"}
          typeName={"반지"}
        />
        <JewelryType
          imgsrc={"https://img.a-bly.com/categories/four_col_sub/268.jpg"}
          typeName={"팔찌"}
        />
        <JewelryType
          imgsrc={"https://img.a-bly.com/categories/four_col_sub/513.jpg"}
          typeName={"발찌"}
        />
        <JewelryType
          imgsrc={"https://img.a-bly.com/categories/four_col_sub/514.jpg"}
          typeName={"보석함"}
        />
      </div>
      <div
        style={{
          height: "1px",
          minHeight: "1px",
          backgroundColor: "rgb(238, 238, 238)",
        }}
      ></div>
      <div
        style={{
          height: "7px",
          minHeight: "7px",
          backgroundColor: "rgb(245, 245, 245)",
        }}
      ></div>
    </div>
  );
};

export default JewelryPage;
