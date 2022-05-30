import { stopSubmit } from 'redux-form'
import { profileAPI } from '../../api/api'
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const DELETE_POST = 'DELETE-POST'
const SET_STATUS = 'SET-STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS'

const initialState = {
  posts: [
    { id: 1, message: 'Hello! How are you man?' },
    { id: 2, message: 'Oh my god, who I looking at? I am fine bro' },
    { id: 3, message: 'zzz' },
  ],
  status: '',
  profile: null,
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { id: 5, message: action.newPost }],
      }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      }
    case SET_STATUS:
      return { ...state, status: action.status }
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile }
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.photos,
        },
      }
    default:
      return state
  }
}

export const addPostActionCreate = (newPost) => ({ type: ADD_POST, newPost })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
const setStatus = (status) => ({ type: SET_STATUS, status })
const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const getProfileUsersThunk = (userId) => async (dispatch) => {
  let res = await profileAPI.getProfileUser(userId)
  dispatch(setUserProfile(res.data))
}

export const getStatus = (userId) => async (dispatch) => {
  let res = await profileAPI.getStatus(userId)
  dispatch(setStatus(res.data))
}

export const updateStatus = (status) => async (dispatch) => {
  let res = await profileAPI.updateStatus(status)
  if (res.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}

export const savePhoto = (file) => async (dispatch) => {
  let res = await profileAPI.savePhoto(file)
  if (res.data.resultCode === 0) {
    dispatch(savePhotoSuccess(res.data.data.photos))
  }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().Auth.id
  const res = await profileAPI.saveProfile(profile)
  if (res.data.resultCode === 0) {
    dispatch(getProfileUsersThunk(userId))
  } else {
    dispatch(stopSubmit('edit-profile', { _error: res.data.messages[0] }))
    return Promise.reject(res.data.messages[0])
  }
}

export default profileReducer
