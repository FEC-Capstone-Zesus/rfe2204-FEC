import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/main.js';

const initialState = {
  loading: 1,
  product: {},
  reviews: {},
  styles: {},
  currentStyle: {},
  mainImage: '',
  imagesArray: [],
  metaData: {},
  questions: [],
  relatedProducts: []
};

var store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

export default store;