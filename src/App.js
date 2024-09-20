import { ThemeProvider } from "@material-tailwind/react";
import { SnackbarProvider } from "notistack";
import React from "react";
import { Provider } from "react-redux";
import Router from "src/Router";
import reducer from "./redux/reducer";
import { createStore } from "redux";

const store = createStore(reducer);
const App = () => {
  return (
    <ThemeProvider>
      <SnackbarProvider />
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
