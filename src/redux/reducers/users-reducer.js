const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'


const data = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

const usersReducer = (state = data, action) => {

    switch (action.type) {
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(newObject => {
                    if (newObject.id === action.userId) {
                        return { ...newObject, followed: true }
                    }
                    return newObject
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(newObject => {
                    if (newObject.id === action.userId) {
                        return { ...newObject, followed: false }
                    }
                    return newObject
                })
            }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count }
        default:
            return state
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })



export default usersReducer