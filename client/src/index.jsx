import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "../store/store.js";
import AppContainer from "./containers/AppContainer.js"
import retrieve from "./retrieve.js"

var root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

retrieve();