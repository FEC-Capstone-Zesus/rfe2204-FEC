import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'
const mockStore = configureStore([]);
const axios = require('axios');
import Relateditems from '../client/src/components/RelatedItems/Relateditems.jsx'
import RelateditemsContainer from '../client/src/containers/RelateditemsContainer.js'
import Overview from '../client/src/components/overview/Overview.jsx'
import OverviewContainer from '../client/src/containers/overview/OverviewContainer.js'
import ImageGallery from '../client/src/components/overview/ImageGallery.jsx';
import ImageGalleryContainer from '../client/src/containers/overview/ImageGalleryContainer.js';
import RatingsAndStyles from '../client/src/components/overview/RatingsAndStyles.jsx';
import RatingsAndStylesContainer from '../client/src/containers/overview/RatingsAndStylesContainer.js';
import ExpandedView from '../client/src/components/overview/ExpandedView.jsx';
import ExpandedViewContainer from '../client/src/containers/overview/ExpandedViewContainer.js';

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


describe("Test Overview redux components", () => {
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
      loading: 1,
      currentStyle: {'style_id':221023,'name':'White & White','original_price':'99.00','sale_price':null,'default?':true,'photos':[{'thumbnail_url':'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80','url':'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'}],'skus':{'1281158':{'quantity':10,'size':'7'},'1281159':{'quantity':30,'size':'7.5'}}},
      mainImage: 'https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      imagesArray: [{"thumbnail_url":"https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"}],
      slice: [0, 7, 0],
      metaData: {"product_id":"37315","ratings":{"1":"32","2":"1","3":"3","4":"12","5":"14"},"recommended":{"false":"40","true":"22"},"characteristics":{"Size":{"id":125044,"value":"2.9285714285714286"},"Width":{"id":125045,"value":"3.3793103448275862"},"Comfort":{"id":125046,"value":"3.1666666666666667"},"Quality":{"id":125047,"value":"3.5000000000000000"}}},
      expanded: false,
      relatedProducts: [37316,37316,37318,37319,37311,37313]
    });

    component = renderer.create(
    <Provider store = {store}>
      <OverviewContainer/>
    </Provider>
    );
  });

});


describe("Test ImageGallery redux components", () => {
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
      loading: 1,
      currentStyle: {'style_id':221023,'name':'White & White','original_price':'99.00','sale_price':null,'default?':true,'photos':[{'thumbnail_url':'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80','url':'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'}],'skus':{'1281158':{'quantity':10,'size':'7'},'1281159':{'quantity':30,'size':'7.5'}}},
      mainImage: 'https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      imagesArray: [{"thumbnail_url":"https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"}],
      slice: [0, 7, 0],
      metaData: {"product_id":"37315","ratings":{"1":"32","2":"1","3":"3","4":"12","5":"14"},"recommended":{"false":"40","true":"22"},"characteristics":{"Size":{"id":125044,"value":"2.9285714285714286"},"Width":{"id":125045,"value":"3.3793103448275862"},"Comfort":{"id":125046,"value":"3.1666666666666667"},"Quality":{"id":125047,"value":"3.5000000000000000"}}},
      expanded: false,
      relatedProducts: [37316,37316,37318,37319,37311,37313]
    });

    component = renderer.create(
    <Provider store = {store}>
      <ImageGalleryContainer/>
    </Provider>
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe("Test RatingsAndStyles redux components", () => {
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
      loading: 1,
      currentStyle: {'style_id':221023,'name':'White & White','original_price':'99.00','sale_price':null,'default?':true,'photos':[{'thumbnail_url':'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80','url':'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'}],'skus':{'1281158':{'quantity':10,'size':'7'},'1281159':{'quantity':30,'size':'7.5'}}},
      mainImage: 'https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      imagesArray: [{"thumbnail_url":"https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"}],
      slice: [0, 7, 0],
      metaData: {"product_id":"37315","ratings":{"1":"32","2":"1","3":"3","4":"12","5":"14"},"recommended":{"false":"40","true":"22"},"characteristics":{"Size":{"id":125044,"value":"2.9285714285714286"},"Width":{"id":125045,"value":"3.3793103448275862"},"Comfort":{"id":125046,"value":"3.1666666666666667"},"Quality":{"id":125047,"value":"3.5000000000000000"}}},
      expanded: false,
      relatedProducts: [37316,37316,37318,37319,37311,37313]
    });

    component = renderer.create(
    <Provider store = {store}>
      <RatingsAndStylesContainer/>
    </Provider>
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});


describe("Test ExpandedView redux components", () => {
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
      loading: 1,
      currentStyle: {'style_id':221023,'name':'White & White','original_price':'99.00','sale_price':null,'default?':true,'photos':[{'thumbnail_url':'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80','url':'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'}],'skus':{'1281158':{'quantity':10,'size':'7'},'1281159':{'quantity':30,'size':'7.5'}}},
      mainImage: 'https://images.unsplash.com/photo-1514590734052-344a18719611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      imagesArray: [{"thumbnail_url":"https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80","url":"https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"}],
      slice: [0, 7, 0],
      metaData: {"product_id":"37315","ratings":{"1":"32","2":"1","3":"3","4":"12","5":"14"},"recommended":{"false":"40","true":"22"},"characteristics":{"Size":{"id":125044,"value":"2.9285714285714286"},"Width":{"id":125045,"value":"3.3793103448275862"},"Comfort":{"id":125046,"value":"3.1666666666666667"},"Quality":{"id":125047,"value":"3.5000000000000000"}}},
      expanded: false,
      relatedProducts: [37316,37316,37318,37319,37311,37313]
    });

    component = renderer.create(
    <Provider store = {store}>
      <ExpandedViewContainer/>
    </Provider>
    );
  });

  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
