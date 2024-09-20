import React, { useState } from "react";
import JewelryType from "../components/jewelry/JewelryType";
import JewelryFilter from "src/components/jewelry/JewelryFilter";
import TopNavbar from "src/components/common/TopNavbar";
import TopInfo from "src/components/common/TopInfo";

const JewelryPage = () => {
  const [selectedButton, setSelectedButton] = useState("all");
  return (
    <div style={{ position: "relative" }}>
      <div
        className="flex top-0 left-0 sticky w-full items-center justify-center flex-col"
        style={{
          zIndex: "999",
        }}
      >
        <TopInfo />
        <TopNavbar title={"주얼리"} />
      </div>
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
      <div
        className="flex gap-5"
        style={{
          borderBottomColor: "rgb(238, 238, 238)",
          borderBottomStyle: "solid",
          borderBottomWidth: "0.8px",
        }}
      >
        <div
          className="cursor-pointer p-3 text-center"
          style={{
            borderBottom: selectedButton === "all" ? "2px solid black" : "none",
          }}
          onClick={() => {
            setSelectedButton("all");
          }}
        >
          전체
        </div>
        <div
          className="cursor-pointer p-3 text-center"
          style={{
            borderBottom:
              selectedButton === "brand" ? "2px solid black" : "none",
          }}
          onClick={() => {
            setSelectedButton("brand");
          }}
        >
          브랜드
        </div>
      </div>
      <div className="flex gap-3">
        <JewelryFilter title="추천순"></JewelryFilter>
        <JewelryFilter title="가격"></JewelryFilter>
        <JewelryFilter title="색상"></JewelryFilter>
        <JewelryFilter title="키·연령"></JewelryFilter>
      </div>
    </div>
  );
};

export default JewelryPage;
