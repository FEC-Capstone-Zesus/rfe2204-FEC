import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import getProduct from "../actions/getProduct.js";
import store from "../store/store.js";
import axios from "axios";
import Promise from "bluebird";

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
  const retrieve = () => {
    axios.get('/products/37311')
      .then((data) => { store.dispatch(getProduct(data)).then((data) => { console.log(store) }) })
      .catch((err)=>console.error(err));
  };
  return (
    <>
      <GlobalStyle />
      <h1>Hello World!!!!!</h1>
      <button onClick={retrieve}>Get A Product</button>
    </>
  );
};

render(<Provider store={store}><App /></Provider>, document.getElementById("root"));




