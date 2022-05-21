import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import getProduct from "../actions/getProduct.js";
import getReviews from "../actions/getReviews.js";
import getStyles from "../actions/getStyles.js";
import getMetaData from "../actions/getMetaData.js";
import getQuestions from "../actions/getQuestions.js";
import getRelatedProducts from "../actions/getRelatedProducts.js";
import store from "../store/store.js";
import axios from "axios";
import AppContainer from "./containers/AppContainer.js"

const retrieve = () => {
  axios.get('/products/37311')
    .then((data) => { store.dispatch(getProduct(data.data))})
    .catch((err)=>console.error(err));

  axios.get('/reviews?product_id=37311&page=1&count=5&sort=helpful')
    .then((data) => {
      store.dispatch(getReviews(data.data))})
    .catch((err)=>console.error(err));

  axios.get('/products/37311/styles')
    .then((data) => {
      store.dispatch(getStyles(data.data))})
    .catch((err)=>console.error(err));

  axios.get('/reviews/meta?product_id=37311')
    .then((data) => {
      store.dispatch(getMetaData(data.data))})
    .catch((err)=>console.error(err));

  axios.get('/qa/questions?product_id=37311&page=1&count=5')
    .then((data) => {
      store.dispatch(getQuestions(data.data.results))})
    .catch((err)=>console.error(err));

  axios.get('/products/37311/related')
    .then((data) => {
      store.dispatch(getRelatedProducts(data.data))})
    .catch((err)=>console.error(err));
};

render(<Provider store={store}><AppContainer /></Provider>, document.getElementById("root"), retrieve);




