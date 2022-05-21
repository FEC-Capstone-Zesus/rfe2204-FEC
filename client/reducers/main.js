import { combineReducers } from 'redux';
import getProductReducer from './getProductReducer.js';
import getReviewsReducer from './getReviewsReducer.js';
import getStylesReducer from './getStylesReducer.js';
import getMetaDataReducer from './getMetaDataReducer.js';
import getQuestionsReducer from './getQuestionsReducer.js';
import getRelatedProductsReducer from './getRelatedProductsReducer.js';
import loadDataReducer from './loadDataReducer.js';

// Need to import reducers once written in an actions dir

var rootReducer = combineReducers({
  // TODO: Add reducers as key/value pairs
  product: getProductReducer,
  reviews: getReviewsReducer,
  styles: getStylesReducer,
  metaData: getMetaDataReducer,
  questions: getQuestionsReducer,
  relatedProducts: getRelatedProductsReducer,
  loading: loadDataReducer
});

export default rootReducer;