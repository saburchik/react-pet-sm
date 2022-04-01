const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

const data = {
    defaultValue: 'Enter a text',
    dialogs: [
        { id: 1, name: 'Andrey' },
        { id: 3, name: 'Masha' },
        { id: 4, name: 'David' }
    ],
    messages: [
        { id: 1, message: 'Hello, how are you?' },
        { id: 4, message: 'lorem somethin text about blah-blah' }
    ]
}

const dialogsReducer = (state = data, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: 5, message: state.defaultValue }],
                defaultValue: ''
            }
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                defaultValue: action.newMessage
            }
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