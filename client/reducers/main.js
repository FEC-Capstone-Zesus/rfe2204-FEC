import { combineReducers } from 'redux';
import getProductReducer from './getProductReducer.js';
import getReviewsReducer from './getReviewsReducer.js';
import getStylesReducer from './getStylesReducer.js';
import getMetaDataReducer from './getMetaDataReducer.js';
import getQuestionsReducer from './getQuestionsReducer.js';
import getRelatedProductsReducer from './getRelatedProductsReducer.js';
import setCurrentStyleReducer from './setCurrentStyleReducer.js';
import setImagesArrayReducer from './setImagesArrayReducer.js';
import setMainImageReducer from './setMainImageReducer.js';
import setSliceReducer from './setSliceReducer.js';
import toggleExpandedReducer from './toggleExpandedReducer.js';
import loadDataReducer from './loadDataReducer.js';
import setOutfitReducer from './setOutfitReducer.js';
import setNewFilterReducer from './setNewFilterReducer.js';
import setUserIsSortReducer from './setUserIsSortReducer.js';

var rootReducer = combineReducers({
  product: getProductReducer,
  reviews: getReviewsReducer,
  styles: getStylesReducer,
  metaData: getMetaDataReducer,
  questions: getQuestionsReducer,
  relatedProducts: getRelatedProductsReducer,
  currentStyle: setCurrentStyleReducer,
  mainImage: setMainImageReducer,
  imagesArray: setImagesArrayReducer,
  slice: setSliceReducer,
  expanded: toggleExpandedReducer,
  loading: loadDataReducer,
  outfit: setOutfitReducer,
  filter: setNewFilterReducer,
  userIsSort: setUserIsSortReducer
});

export default rootReducer;