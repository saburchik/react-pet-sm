import { stopSubmit } from 'redux-form'
import { authAPI, securityAPI } from '../../api/api'

const SET_USER_DATA = 'SET-USER-DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET-CAPTCHA-URL-SUCCESS'

const initialState = {
  id: null,
  email: null,
  password: null,
  isAuth: false,
  captchaUrl: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

const setAuthUserData = (id, email, password, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, password, isAuth },
})

const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
})

export const setAuth = () => {
  return async (dispatch) => {
    let res = await authAPI.me()
    if (res.data.resultCode === 0) {
      let { id, email, password } = res.data.data
      dispatch(setAuthUserData(id, email, password, true))
    }
  }
}

export const login = (email, password, rememberMe, captcha) => {
  return async (dispatch) => {
    let res = await authAPI.login(email, password, rememberMe, captcha)
    if (res.data.resultCode === 0) {
      dispatch(setAuth())
    } else {
      if (res.data.resultCode === 10) {
        dispatch(getCaptcha())
      }
      let messageError =
        res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
      dispatch(stopSubmit('login', { _error: messageError }))
    }
  }
}

export const logout = () => {
  return async (dispatch) => {
    let res = await authAPI.logout()
    if (res.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
    }
  }
}

export const getCaptcha = () => async (dispatch) => {
  const res = await securityAPI.getCaptchaUrl()
  const captchaUrl = res.data.url

  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer
