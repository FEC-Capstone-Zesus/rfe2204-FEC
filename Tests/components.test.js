import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
import "babel-polyfill";
const mockStore = configureStore([]);
const axios = require('axios');
import Relateditems from '../client/src/components/RelatedItems/Relateditems.jsx'
import RelateditemsContainer from '../client/src/containers/RelateditemsContainer.js'

describe("Test related items redux components", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      product: {
        category: "hello",
        name: "test",
        default_price: 100
      },
      styles: {results: [{photos: [{thumbnail_url: "hello"}]}]},
      relatedProducts: [37316, 37316, 37318, 37319, 37311, 37313],
      metaData: {product_id: 37315,
      ratings: {1: '32', 2: '4', 3: '5', 4: '4', 5: '12'},
      characteristics: {Comfort:
        {id: 125046,
        value: "3.1666666666666667"}}
      }
    });

    component = new Promise(renderer.create(
    <Provider store = {store}>
      <RelateditemsContainer/>
    </Provider>
    ));
  });

  it('should render with given state from Redux store', async () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

});

