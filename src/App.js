import { ThemeProvider } from "@material-tailwind/react";
import React from "react";
import Router from "src/Router";

const App = () => {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
};

export default App;
