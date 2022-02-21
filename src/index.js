import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import { App } from "./containers/App/App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import ThemeProvider from "./context/ThemeProvider";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
