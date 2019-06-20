import * as types from '../constants/ActionTypes'

const initialState = {
  session: null,
  isLoggedIn: false
}

const updateStore = (state = initialState, action) => {
  if (action.type === types.AUTH_TRY_LOGIN_SUCCESS) {
    return {
      ...state,
      isLoggedIn: true,
      session: action.session
    }
  }

  return state
}

export default updateStore