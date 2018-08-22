import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import merge from 'lodash/merge';
import apiMiddleware from  './middleware/api';
const path = require('path');

// actions
export const EXPERIENCE_REQUEST = 'EXPERIENCE_REQUEST';
export const EXPERIENCE_SUCCESS = 'EXPERIENCE_SUCCESS';
export const EXPERIENCE_FAILURE = 'EXPERIENCE_FAILURE';
export const EXPERIENCE_UPDATE = 'EXPERIENCE_UPDATE';

const CALL_API = 'Call API';
const fetchExperience = () => {
  return {
    [CALL_API]: {
      types: [ EXPERIENCE_REQUEST, EXPERIENCE_SUCCESS, EXPERIENCE_FAILURE ],
      url: `static/data/timeline.json`,
    }
  }
}
const updateExperienceAction = (experience, experiences) => {
  const newData = experiences.map(item => {
    if(item.id == experience) {
      return experience;
    } else {
      return item;
    }
  })
  return {
    type: EXPERIENCE_UPDATE,
    updatedData: newData
  }
}
export const loadExperience = () => (dispatch, getState) => {
  // const user = getState().experience.data;

  return dispatch(fetchExperience())
}
export const updateExperience = (experience) => (dispatch, getState) => {
  const experiences = getState().experience.data;
  return dispatch(updateExperienceAction(experience, experiences))
}

// reducers
const experience = (state = {data: [], loading: false}, action) => {
  switch (action.type) {
    case EXPERIENCE_REQUEST:
      return merge({}, state, {loading: true});
    case EXPERIENCE_SUCCESS:
      return merge({}, state, {data: action.response.data, loading: false});
    case EXPERIENCE_REQUEST:
      return merge({}, state, {loading: false});
    case EXPERIENCE_UPDATE:
      return merge({}, state, {data: action.updatedData});
    default:
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