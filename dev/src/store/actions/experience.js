import { experienceTypes } from '../actionTypes';
import { CALL_API } from '../middleware/api';

// xhr - 数据请求
const fetchExperience = () => {
  return {
    [CALL_API]: {
      types: [ experienceTypes.REQUEST, experienceTypes.SUCCESS, experienceTypes.FAILURE ],
      url: `static/data/timeline.json`,
    }
  }
}
// 更新的 action
const updateExperienceAction = (newExperienceItem) => {
  return {
    type: experienceTypes.UPDATE,
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