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
// 更新的 action
const updateExperienceAction = (newExperienceItem) => {
  return {
    type: EXPERIENCE_UPDATE,
    updatedDataItem: newExperienceItem
  }
}
// 触发加载
export const loadExperience = () => (dispatch) => {
  return dispatch(fetchExperience())
}
// 触发更新
export const updateExperience = (newExperienceItem) => (dispatch) => {
  return dispatch(updateExperienceAction(newExperienceItem))
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
      const newData = state.data.map(item => {
        if(item.id == action.updatedDataItem.id) {
          return action.updatedDataItem;
        } else {
          return item;
        }
      })
      return merge({}, state, {data: newData});
    default:
      return state;
  }
}

/**
 * 生成 reducer 的函数
 * @param {object} initState 默认state
 * @param {array} types action types
 * @param {array} returns Action 处理后的返回值
 */
function createReducer(initState = {}, types = [], returns = []) {
  
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