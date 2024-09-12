import React from "react";
import CardList from "../components/common/CardList";
import CateList from "../components/CateList";
import BottomBar from "../components/main/Bottomnav";

const MainPage = () => {
  return (
    <div>
      <CateList />
      <CardList />
      <BottomBar />
    </div>
  );
};

export default MainPage;
