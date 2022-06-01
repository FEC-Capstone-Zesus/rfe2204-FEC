/**
 * @jest-environment jsdom
 */
const {defaults} = require('jest-config');
require('dotenv').config()
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
import "babel-polyfill";
import {
  fireEvent,
  render,
  waitFor,
  waitForElementToBeRemoved,
  queryByText,
  screen,
} from "@testing-library/react";
import {toBeInTheDocument} from '@testing-library/jest-dom';
const mockStore = configureStore([]);
const axios = require('axios');
import Relateditems from '../client/src/components/RelatedItems/Relateditems.jsx'
import RelateditemsContainer from '../client/src/containers/RelateditemsContainer.js'

axios.defaults.baseURL = "http://localhost:3000"

describe("Test related items redux components", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      product: {
        id: 37315,
        category: "hello",
        name: "Heir Force Ones",
        category: 'Kicks',
        default_price: 99.00
      },
      styles: {results: [{photos: [{thumbnail_url: "hello"}]}]},
      relatedProducts: [37316, 37316, 37318, 37319, 37311, 37313],
      metaData: {characteristics: {
        Comfort: {id: 125046, value: '2.9354838709677419'},
        Quality: {id: 125047, value: '3.1290322580645161'},
        Size: {id: 125044, value: '2.8000000000000000'},
        Width: {id: 125045, value: '3.1944444444444444'}
      },
      ratings: {1: '32', 2: '4', 3: '5', 4: '4', 5: '12'},
      }
    });

    render(
    <Provider store = {store}>
      <RelateditemsContainer/>
    </Provider>
    );

  });

  it('should render with given state from Redux store', async () => {
    await waitFor(() => {
      expect(screen.getByText('Morning Joggers')).toBeInTheDocument()
    });
  });

});

