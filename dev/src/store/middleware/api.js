const API_ROOT = 'https://www.lalatina.cc/'
// 封装的请求方法，没有error是因为
const callapi = url => {
  const fullUrl = (url.indexOf(API_ROOT) === -1) ? API_ROOT + url : url

  return fetch(fullUrl)
    .then(response => {
      return response.json().then(json => {
        if(!response.ok) {
          return Promise.reject(json)
        }
        return json;
      })
    })
}

export const CALL_API = 'Call API';
export default store => next => action => {
  const callAPI = action[CALL_API];

  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  let { url } = callAPI;
  const { types } = callAPI;

  if (typeof url !== 'string') {
    throw new Error('指定一个 url')
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('预计有三种动作类型的数组。')
  }

  if (!types.every(type => typeof type === 'string')) {
    throw new Error('预计动作类型为字符串。')
  }

  const actionWidth = data => {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API];
    
    return finalAction
  }

  const [requestType, successType, failureType] = types;
  next(actionWidth({type: requestType}));

  return callapi(url).then(
    response => next(actionWidth({
      response,
      type: successType
    })),
    error => next(actionWidth({
      type: failureType,
      error: error.message || 'Something bad happend'
    }))
  )
}