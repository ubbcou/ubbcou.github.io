/**
 * 生成 reducer 的函数
 * @param {object} initState 默认state
 * @param {object} handles action type 所对应的 state 处理行为
 */
export function createReducer(initState = {}, handles = {}) {
  return (state = initState, action) => {
    if (handles.hasOwnProperty(action.type)) {
      return handles[action.type](state, action);
    } else {
      return initState;
    }
  }
}