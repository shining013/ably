import { ThemeProvider } from "@material-tailwind/react";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import React from "react";
import Router from "src/Router";

const App = () => {
  return (
    <ThemeProvider>
      <SnackbarProvider />
      <Router />
    </ThemeProvider>
  );
};

export default App;
