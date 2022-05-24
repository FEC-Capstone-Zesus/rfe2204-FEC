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

var actions = [
  getProduct,
  getReviews,
  getStyles,
  getMetaData,
  getQuestions,
  getRelatedProducts
]

const retrieve = () => {
  store.dispatch({ type: 'START' });
  // var productID = '37311';
  var productID = '37315';
  var promises = [
    axios.get(`/products/${productID}`),
    axios.get(`/reviews?product_id=${productID}&page=1&count=5&sort=helpful`),
    axios.get(`/products/${productID}/styles`),
    axios.get(`/reviews/meta?product_id=${productID}`),
    axios.get(`/qa/questions?product_id=${productID}&page=1&count=5`),
    axios.get(`/products/${productID}/related`)
  ];


  Promise.all(promises).then(promises => {

    promises.forEach((data, i) => {
      store.dispatch(actions[i](data.data));

      if (i === promises.length - 1) {
        store.dispatch({ type: 'STOP' })
      }
    });
  })
  .catch(err => console.log('retrieve data err: ', err));

};

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root"),
  retrieve
);
