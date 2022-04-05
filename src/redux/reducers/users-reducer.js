const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

const data = {
    users: [
        {
            id: 1, fullName: 'Maksim', status: 'I am boss', location: { country: 'Russian', city: 'Novosibirsk' }, avatar: 'https://avatars.mds.yandex.net/i?id=a21db4645e590d90b937f39f94686372-5648147-images-thumbs&n=13&exp=1'
            , followed: true
        },
        { id: 2, fullName: 'Jack', status: 'I am not boss', location: { country: 'Estonia', city: 'Narva' }, avatar: 'https://avatars.mds.yandex.net/i?id=97ab89d5b25d982ea3f7c1836b8a0359-5477525-images-thumbs&n=13&exp=1', followed: true },
        { id: 3, fullName: 'Stephan', status: 'I am boss too', location: { country: 'Ukraine', city: 'Kiev' }, avatar: 'https://avatars.mds.yandex.net/i?id=e02adda79ec9e80ed7ce0220937d21f1-5450792-images-thumbs&n=13&exp=1', followed: false },
        { id: 4, fullName: 'Nicole', status: 'I am director', location: { country: 'Latvia', city: 'Riga' }, avatar: 'https://avatars.mds.yandex.net/i?id=71b183a5367053a01e88f9d02e95a048-4826597-images-thumbs&n=13&exp=1', followed: false }
    ]
}

const usersReducer = (state = data, action) => {

    switch (action.type) {
        case SET_USERS: {
            return { ...state, users: [...state.users, action.users] }
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
        default:
            return state
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })



export default usersReducer