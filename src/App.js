import React from "react";
import Router from "./Router";
import TopInfo from "./components/common/TopInfo";
import BottomBar from "./components/main/Bottomnav";

const App = () => {
  return (
    <>
      <TopInfo />
      <Router />
      <BottomBar />
    </>
  );
};

export default App;
