import * as types from '../constants/ActionTypes';

const initialState = {
  session: null,
  isLoggedIn: false,
  selectedCountry: null
}

const update = (state = initialState, action) => {
  if (action.type === types.AUTH_TRY_LOGIN_SUCCESS) {
    return {
      ...state,
      isLoggedIn: true,
      session: action.session
    };
  }

  return state;
}

export default update;