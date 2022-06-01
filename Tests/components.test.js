import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
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
      styles: {results: [{photos: [{thumbnail_url: "hello"}]}]}
    });

    component = renderer.create(
    <Provider store = {store}>
      <RelateditemsContainer/>
    </Provider>
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

});

