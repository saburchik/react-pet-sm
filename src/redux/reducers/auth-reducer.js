const SET_USERS_DATA = 'SET-USERS-DATA'

const initialState = {
    userId: null,
    email: null,
    login: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return { ...state, ...action.data }
        default:
            return state
    }
}

export const setUsersData = (userId, email, login) => ({ type: SET_USERS_DATA, data: { userId, email, login } })

export default authReducer