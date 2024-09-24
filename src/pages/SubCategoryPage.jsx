import React, { useState } from "react";

import SubProductList from "src/components/subcategory/SubProductList";
import TopInfo from "src/components/common/TopInfo";
import TopNavbar from "src/components/common/TopNavbar";
import RankingBar from "src/components/subcategory/RankingBar";
import RankingSlide from "src/components/subcategory/RankingSlide";
import JewelryFilter from "src/components/jewelry/JewelryFilter";
import { useParams } from "react-router-dom";

function SubCategoryPage() {
  const [selectedButton, setSelectedButton] = useState("all");
  const { subcategoryId } = useParams();

  let category = "";
  if (subcategoryId === "earing") {
    category = "귀걸이";
  } else if (subcategoryId === "ring") {
    category = "반지";
  } else if (subcategoryId === "necklace") {
    category = "목걸이";
  } else if (subcategoryId === "bracelet") {
    category = "팔찌";
  } else if (subcategoryId === "anklet") {
    category = "발찌";
  } else if (subcategoryId === "jewelry-box") {
    category = "보석함";
  }

  return (
    <div>
      <div
        className="flex top-0 left-0 sticky w-full items-center justify-center flex-col"
        style={{
          zIndex: "999",
        }}
      >
        <TopInfo />
        <TopNavbar title={category} />
      </div>

      {/* <TopInfo /> */}
      {/* 실시간 귀걸이 랭킹 전체보기 바  */}
      <RankingBar />

      {/* <SubProductList /> */}

      <div className="ml-3">
        <RankingSlide subcategoryName={subcategoryId} />
      </div>

      {/* <div
        className="m-5"
        style={{
          minHeight: "7px",
          backgroundColor: "rgb(245, 245, 245)",
        }}
      ></div> */}

      <div
        className="mt-6"
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

      <div
        className="flex gap-2.5 p-2.5"
        style={{
          borderBottomColor: "rgb(238, 238, 238)",
          borderBottomStyle: "solid",
          borderBottomWidth: "0.8px",
        }}
      >
        <JewelryFilter title="추천순"></JewelryFilter>
        <JewelryFilter title="가격"></JewelryFilter>
        <JewelryFilter title="색상"></JewelryFilter>
        <JewelryFilter title="키·연령"></JewelryFilter>
      </div>

      {/* <CardList /> */}
      <SubProductList />
    </div>
  );
}

export default SubCategoryPage;
