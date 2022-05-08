import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/reducers";
import { Provider } from "react-redux";

let store = configureStore({ reducer: rootReducer });

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
