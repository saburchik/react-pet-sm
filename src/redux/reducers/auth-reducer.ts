import { Dispatch } from 'react'
import { authAPI } from '../../api/api'
import { SetUsersAction } from '../types/authReducerTypes'
import { AuthAction, AuthState, UsersDataTypes } from '../types/authReducerTypes.ts'

const initialState: AuthState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case UsersDataTypes.SET_USERS_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

const setAuthUserData = ({ id, email, login }): SetUsersAction => ({ type: UsersDataTypes.SET_USERS_DATA, data: { id, email, login } })


export const setAuth = () => {
    return (dispatch: Dispatch<SetUsersAction>) => {
        authAPI.me()
            .then(res => {
                if (res.data.resultCode === 0) {
                    let { id, login, email } = res.data.data;
                    dispatch(setAuthUserData({ id, email, login }))
                }
            });
    }
}

export default authReducer