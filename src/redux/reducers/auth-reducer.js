import { stopSubmit } from 'redux-form'
import { authAPI } from '../../api/api'

const SET_USERS_DATA = 'SET-USERS-DATA'
const initialState = {
    id: null,
    email: null,
    password: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

const setAuthUserData = (id, email, password, isAuth) => ({ type: SET_USERS_DATA, payload: { id, email, password, isAuth } })


export const setAuth = () => {
    return (dispatch) => {
        return authAPI.me()
            .then(res => {
                if (res.data.resultCode === 0) {
                    let { id, password, email } = res.data.data;
                    dispatch(setAuthUserData(id, email, password, true))
                }
            })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setAuth())
                } else {
                    let messageError = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
                    dispatch(stopSubmit('login', { _error: messageError }))
                }
            });
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            });
    }
}

export default authReducer