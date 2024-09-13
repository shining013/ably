import React from "react";
import CardList from "src/components/common/CardList";
import CateList from "src/components/CateList";
import BottomBar from "src/components/main/Bottomnav";

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
