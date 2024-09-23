import React, { useState } from "react";
import JewelryType from "../components/jewelry/JewelryType";
import JewelryFilter from "src/components/jewelry/JewelryFilter";
import TopNavbar from "src/components/common/TopNavbar";
import TopInfo from "src/components/common/TopInfo";
import RecommendBox from "src/components/main/RecommendBox";
import CardList from "src/components/common/CardList";

const jewelryTypes = [
  {
    imgSrc: "https://img.a-bly.com/categories/four_col_sub/265.jpg",
    typeName: "귀걸이",
    path: "/subcategory/earing",
  },
  {
    imgSrc: "https://img.a-bly.com/categories/four_col_sub/266.jpg",
    typeName: "목걸이",
    path: "/subcategory/necklace",
  },
  {
    imgSrc: "https://img.a-bly.com/categories/four_col_sub/267.jpg",
    typeName: "반지",
    path: "/subcategory/ring",
  },
  {
    imgSrc: "https://img.a-bly.com/categories/four_col_sub/268.jpg",
    typeName: "팔찌",
    path: "/subcategory/bracelet",
  },
  {
    imgSrc: "https://img.a-bly.com/categories/four_col_sub/513.jpg",
    typeName: "발찌",
    path: "/subcategory/anklet",
  },
  {
    imgSrc: "https://img.a-bly.com/categories/four_col_sub/514.jpg",
    typeName: "보석함",
    path: "/subcategory/jewelry-box",
  },
];

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

      <div className="grid grid-cols-5 p-3 gap-5">
        {jewelryTypes.map((type) => (
          <JewelryType
            key={type.imgSrc}
            imgsrc={type.imgSrc}
            typeName={type.typeName}
            path={type.path}
          />
        ))}
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
        className="flex gap-7 px-3"
        style={{
          borderBottomColor: "rgb(238, 238, 238)",
          borderBottomStyle: "solid",
          borderBottomWidth: "0.8px",
        }}
      >
        <div
          className="cursor-pointer py-3 text-center text-sm"
          style={{
            borderBottom: selectedButton === "all" ? "2px solid black" : "none",
            fontWeight: selectedButton === "all" ? "600" : "400",
            color:
              selectedButton === "all"
                ? "rgb(31, 31, 31)"
                : "rgb(119, 119, 119)",
          }}
          onClick={() => {
            setSelectedButton("all");
          }}
        >
          전체
        </div>
        <div
          className="cursor-pointer py-3 text-center text-sm"
          style={{
            borderBottom:
              selectedButton === "brand" ? "2px solid black" : "none",
            fontWeight: selectedButton === "brand" ? "600" : "400",
            color:
              selectedButton === "brand"
                ? "rgb(31, 31, 31)"
                : "rgb(119, 119, 119)",
          }}
          onClick={() => {
            setSelectedButton("brand");
          }}
        >
          브랜드
        </div>
      </div>
      <div className="flex gap-3 pt-3 pb-[11px] px-4">
        <JewelryFilter title="추천순"></JewelryFilter>
        <JewelryFilter title="가격"></JewelryFilter>
        <JewelryFilter title="색상"></JewelryFilter>
        <JewelryFilter title="키·연령"></JewelryFilter>
      </div>
      <RecommendBox />
      <CardList />
    </div>
  );
};

export default JewelryPage;
