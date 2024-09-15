import React from "react";
import SlideComp from "src/components/SlideComp";
import CardList from "src/components/common/CardList";
import RecommendBox from "src/components/main/RecommendBox";
import BottomBar from "src/components/main/Bottomnav";
import CategoryList from "src/components/main/CategoryList";

const MainPage = () => {
  return (
    <div style={{ paddingTop: "120px" }}>
      <SlideComp />
      <CategoryList />
      <RecommendBox />
      <CardList />
      <BottomBar />
    </div>
  );
};

export default MainPage;
