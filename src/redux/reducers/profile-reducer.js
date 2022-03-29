const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

const profileReducer = (state, action) => {
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