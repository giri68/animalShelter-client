import * as actions from './actions'

const initialState = {
  cat: {},
  dog: {}
}

export const reducer = (state = initialState, action) => {

  if (action.type === actions.FETCH_CAT_SUCCESS) {
    return Object.assign({}, state, {
      cat: action.cat
    })
  }

  if (action.type === actions.FETCH_DOG_SUCCESS) {
    return Object.assign({}, state, {
      dog: action.dog
    })
  }

  return state;
}
