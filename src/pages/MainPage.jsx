import React from "react";
import CardList from "../components/common/CardList";

import CateList from "../components/main/CateList";
import BottomBar from "../components/main/Bottomnav";
import SlideComp from "../components/main/SlideComp";

const MainPage = () => {
  return (
    <div className="my-0">
      <CateList />
      <SlideComp />
      <CardList />
      <BottomBar />
    </div>
  );
};

export default MainPage;
