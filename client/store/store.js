import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/main.js';

const initialState = {
  //TODO: key/value pairs with appropriate names and data types (empty)
};

var store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

export default store;