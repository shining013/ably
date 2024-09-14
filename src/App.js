import { ThemeProvider } from "@material-tailwind/react";
import React from "react";
import Router from "src/Router";
import TopInfo from "src/components/common/TopInfo.jsx";

const App = () => {
  return (
    <ThemeProvider>
      <TopInfo />
      <Router />
    </ThemeProvider>
  );
};

export default App;
