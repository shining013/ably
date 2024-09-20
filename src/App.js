import { ThemeProvider } from "@material-tailwind/react";
import { SnackbarProvider } from "notistack";
import React from "react";
import { createStoreHook, Provider } from "react-redux";
import Router from "src/Router";
import reducer from "./redux/reducer";

const store = createStoreHook(reducer);
const App = () => {
  return (
    <ThemeProvider store={store}>
      <SnackbarProvider />
      <Provider>
        <Router />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
