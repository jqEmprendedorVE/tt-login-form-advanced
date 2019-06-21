import * as types from '../../constants/ActionTypes'
import apiClient from '../../api/client'

export const tryLogin = ({email, pass}) => (dispatch) => apiClient.login(email, pass)
.then(res => dispatch({
    type: types.AUTH_TRY_LOGIN_SUCCESS,
    session: res.session
  })
)
.catch(e => dispatch({
    type: types.AUTH_TRY_LOGIN_FAILED,
    e
  })
)

export const logout = () => (dispatch) => dispatch({type: types.AUTH_LOGOUT})
export const loginInit = () => (dispatch) => dispatch({type: types.AUTH_LOGIN_INIT})