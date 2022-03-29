const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.messageState,
            }
            state.messages.push(newMessage)
            state.messageState = ''
            return state
        case UPDATE_MESSAGE_TEXT:
            state.messageState = action.newMessage
            return state
        default:
            return state
    }
}

export const addMessageActionCreate = () => ({ type: ADD_MESSAGE })
export const updateMessageActionChange = (text) => ({
    type: UPDATE_MESSAGE_TEXT,
    newMessage: text
})

export default dialogsReducer