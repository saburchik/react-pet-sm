import { profileAPI } from '../../api/api'
const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const DELETE_POST = 'DELETE-POST'
const SET_STATUS = 'SET-STATUS'

const data = {
    defaultValue: 'Enter to text',
    posts: [
        { id: 1, message: 'Hello! How are you man?' },
        { id: 2, message: 'Oh my god, who I looking at? I am fine bro' },
        { id: 3, message: 'zzz' }
    ],
    status: 'skkdnjanj ',
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
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
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
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const getProfileUsersThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileUsers(userId).then(res => {
            dispatch(setUserProfile(res.data))
        })
    }
}

export default profileReducer