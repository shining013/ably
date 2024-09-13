import React from "react";
import CardList from "../components/common/CardList";
import SlideComp from "../components/SlideComp";
import CategoryList from "../components/main/CategoryList";
import BottomBar from "../components/main/Bottomnav";

const MainPage = () => {
  return (
    <div style={{ paddingTop: "120px" }}>
      <SlideComp />
      <CategoryList />
      <CardList />
      <BottomBar />
    </div>
  );
};

export default MainPage;
