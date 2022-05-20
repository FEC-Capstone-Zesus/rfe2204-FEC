import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "../store/store.js";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: white;
    font-family: 'Inter', sans-serif;
  }
  h1 {
    color: blue;
  }
  `;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <h1>Hello World!</h1>
    </>
  );
};

render(<Provider store={store}><App /></Provider>, document.getElementById("root"));




