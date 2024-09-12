import React from "react";
import Router from "./Router";
import TopInfo from "./components/common/TopInfo";
import Bottombar from "./components/main/Bottomnav";

const App = () => {
  return (
    <>
      <TopInfo />
      <Router />
      <Bottombar />
    </>
  );
};

export default App;
