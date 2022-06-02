import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "../store/store.js";
import AppContainer from "./containers/AppContainer.js"
import RelateditemsContainer from "./containers/RelateditemsContainer.js"
import retrieve from "./retrieve.js"


render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root"),
  retrieve
);
