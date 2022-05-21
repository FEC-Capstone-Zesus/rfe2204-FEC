import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import getProduct from "../actions/getProduct.js";
import store from "../store/store.js";
import axios from "axios";
import AppContainer from "./containers/AppContainer.js"

const retrieve = () => {
  axios.get('/products/37311')
    .then((data) => { store.dispatch(getProduct(data.data))})
    .catch((err)=>console.error(err));
};

render(<Provider store={store}><AppContainer /></Provider>, document.getElementById("root"), retrieve);




