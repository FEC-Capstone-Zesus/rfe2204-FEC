import { combineReducers } from 'redux';
import getProductReducer from './getProductReducer.js';
import getReviewsReducer from './getReviewsReducer.js';

// Need to import reducers once written in an actions dir

var rootReducer = combineReducers({
  // TODO: Add reducers as key/value pairs
  product: getProductReducer,
  reviews: getReviewsReducer,

});

export default rootReducer;