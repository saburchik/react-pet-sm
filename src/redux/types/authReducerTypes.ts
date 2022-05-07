export enum UsersDataTypes {
    SET_USERS_DATA = 'SET-USERS-DATA'
}

export interface AuthState {
    id: null | number
    email: null | string
    password: null | string
    isAuth: boolean
}

export interface SetUsersAction {
    type: UsersDataTypes.SET_USERS_DATA
    payload: object | string
}

export interface AuthAction {
    type: string
    payload: object | string
}