import * as types from '../constants/ActionTypes';

const initialState = {
  loaded: false,
  isLoggedIn: false,
  selectedCountry: null
}

const update = (state = initialState, action) => {
  if (action.type === types.USER_LOGGED_IN) {
    return {
      ...state,
      loaded: true,
    };
  }

  return state;
}

export default update;