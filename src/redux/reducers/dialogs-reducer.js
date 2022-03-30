const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

const data = {
    dialogs: [
        { id: 1, name: 'Andrey' },
        { id: 3, name: 'Masha' },
        { id: 4, name: 'David' }
    ],
    messageState: 'Enter a text',
    messages: [
        { id: 1, message: 'Hello, how are you?' },
        { id: 4, message: 'lorem somethin text about blah-blah' }
    ]
}

const dialogsReducer = (state = data, action) => {
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