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
  slice: [0, 7],
  metaData: {},
  questions: [],
  relatedProducts: [],
  start: 0,
  end: 7
};

var store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

export default store;