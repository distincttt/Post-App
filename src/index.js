import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/rootReducer";
// import { thunk } from "redux-thunk";

import App from "./App";
import { spamFilter } from "./redux/middleware";
import "./index.css";

const store = configureStore({
   reducer: rootReducer,
   devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spamFilter),
});

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById("root")
);
