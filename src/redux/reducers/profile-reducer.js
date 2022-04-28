import { usersAPI } from '../../api/api'
const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

const data = {
    defaultValue: 'Saburchik',
    posts: [
        { id: 1, message: 'Hello! How are you man?' },
        { id: 2, message: 'Oh my god, who I looking at? I am fine bro' },
        { id: 3, message: 'zzz' }
    ],
    profile: null
}

const profileReducer = (state = data, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 5, message: state.defaultValue }],
                defaultValue: '',
            }
        case UPDATE_POST_TEXT:
            return {
                ...state,
                defaultValue: action.newText
            }
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        default:
            return state
    }
}

export const addPostActionCreate = () => ({ type: ADD_POST })
export const updateActionChange = (text) => ({ type: UPDATE_POST_TEXT, newText: text })
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const getProfileUsersThunk = (userId) => {
    return (dispatch) => {
        usersAPI.getProfileUsers(userId).then(res => {
            dispatch(setUserProfile(res.data))
        })
    }
}

export default profileReducer