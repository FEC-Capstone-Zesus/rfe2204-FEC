import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "../store/store.js"; 


const App = () => {
  return (<h1>Hello World!</h1>);
};

render(<Provider store={store}><App /></Provider>, document.getElementById("root"));




