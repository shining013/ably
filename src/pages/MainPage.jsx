import React from "react";
import CardList from "../components/common/CardList";
import CategoryList from "../components/main/CategoryList";
import BottomBar from "../components/main/Bottomnav";

const MainPage = () => {
  return (
    <div style={{ paddingTop: "120px" }}>
      <CategoryList />
      <CardList />
      <BottomBar />
    </div>
  );
};

export default MainPage;
