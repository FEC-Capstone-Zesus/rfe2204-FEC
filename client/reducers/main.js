import { combineReducers } from 'redux';
import getProductReducer from './getProductReducer.js';

// Need to import reducers once written in an actions dir

var rootReducer = combineReducers({
  // TODO: Add reducers as key/value pairs
  product: getProductReducer,
})

export default rootReducer;