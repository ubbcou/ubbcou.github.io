import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import merge from 'lodash/merge';
import apiMiddleware from  './middleware/api';
const path = require('path');

// actions
export const REPO_REQUEST = 'REPO_REQUEST'
export const REPO_SUCCESS = 'REPO_SUCCESS'
export const REPO_FAILURE = 'REPO_FAILURE'

const CALL_API = 'Call API';
const fetchRepo = () => {
  return {
    [CALL_API]: {
      types: [ REPO_REQUEST, REPO_SUCCESS, REPO_FAILURE ],
      url: `static/data/timeline.json`,
    }
  }
}
export const loadUser = () => (dispatch, getState) => {
  // const user = getState().experience.data;

  return dispatch(fetchRepo())
}

// reducers
const experience = (state = {data: []}, action) => {
  if (action.response && action.response.success) {
    return merge({}, state, {data: action.response.data});
  } else {
    return state;
  }
}

const rootReducer = combineReducers({
  experience
})

// store
const configureStore = createStore(
  rootReducer,
  applyMiddleware(thunk, apiMiddleware)
)

export default configureStore;