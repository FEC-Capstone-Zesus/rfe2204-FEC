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
  slice: [],
  metaData: {},
  questions: [],
  expanded: false,
  relatedProducts: [],
  outfit: [{add: true}],
  filter: { 5: false, 4: false, 3: false, 2: false, 1: false },
  userIsSort: false
};

var store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

export default store;