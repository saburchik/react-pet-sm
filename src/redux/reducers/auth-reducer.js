import { authAPI } from '../../api/api'
const SET_USERS_DATA = 'SET-USERS-DATA'

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

const setAuthUserData = (userId, email, login) => ({ type: SET_USERS_DATA, data: { userId, email, login } })

export const setAuth = () => {
    return (dispatch) => {
        authAPI.me()
            .then(res => {
                if (res.data.resultCode === 0) {
                    let { id, login, email } = res.data.data;
                    dispatch(setAuthUserData(id, email, login))
                }
            });
    }
}

export default authReducer