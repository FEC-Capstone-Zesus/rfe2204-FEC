import { combineReducers } from 'redux';
import getProductReducer from './getProductReducer.js';
import getReviewsReducer from './getReviewsReducer.js';
import getStylesReducer from './getStylesReducer.js';

// Need to import reducers once written in an actions dir

var rootReducer = combineReducers({
  // TODO: Add reducers as key/value pairs
  product: getProductReducer,
  reviews: getReviewsReducer,
  styles: getStylesReducer

});

export default rootReducer;