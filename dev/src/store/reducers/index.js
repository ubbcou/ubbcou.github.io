import { combineReducers } from 'redux';
import merge from 'lodash/merge';
import {createReducer} from './util';
import { experienceTypes } from '../actionTypes';

const experience = createReducer({data: [], loading: false}, {
  [experienceTypes.REQUEST]: (state) => {
    return merge({}, state, {loading: true});
  },
  [experienceTypes.SUCCESS]: (state, action) => {
    return merge({}, state, {data: action.response.data, loading: false});
  },
  [experienceTypes.FAILURE]: (state) => {
    return merge({}, state, {loading: false});
  },
  [experienceTypes.UPDATE]: (state, action) => {
    const newData = state.data.map(item => {
      if(item.id == action.updatedDataItem.id) {
        return action.updatedDataItem;
      } else {
        return item;
      }
    })
    return merge({}, state, {data: newData});
  }
})

export default combineReducers({
  experience
})