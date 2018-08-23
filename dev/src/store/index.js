import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import apiMiddleware from  './middleware/api';
import rootReducer from './reducers/index';

// store
const configureStore = createStore(
  rootReducer,
  applyMiddleware(thunk, apiMiddleware)
)

export default configureStore;