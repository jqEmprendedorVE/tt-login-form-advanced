import * as types from '../constants/ActionTypes'

const initialState = {
  session: null,
  isLoggedIn: false,
  loginFailed: false
}

const updateStore = (state = initialState, action) => {
  if (action.type === types.AUTH_TRY_LOGIN_SUCCESS) {
    return {
      ...state,
      session: action.session,
      isLoggedIn: true,
      loginFailed: false
    }
  }

  if (action.type === types.AUTH_TRY_LOGIN_FAILED) {
    console.log(action.e);
    return {
      ...state,
      loginFailed: true
    }
  }

  if ([types.AUTH_LOGIN_INIT, types.AUTH_LOGOUT].includes(action.type)) {
    return initialState 
  }

  return state
}

export default updateStore