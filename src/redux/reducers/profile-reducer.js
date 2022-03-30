const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

const data = {
    postState: 'Saburchik',
    posts: [
        { id: 1, message: 'Hello! How are you man?' },
        { id: 2, message: 'Oh my god, who I looking at? I am fine bro' },
        { id: 3, message: 'zzz' }
    ]
}

const profileReducer = (state = data, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.postState,
            }
            state.posts.push(newPost)
            state.postState = ''
            return state
        case UPDATE_POST_TEXT:
            state.postState = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreate = () => ({ type: ADD_POST })
export const updateActionChange = (text) => ({
    type: UPDATE_POST_TEXT,
    newText: text
})

export default profileReducer