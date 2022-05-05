const ADD_MESSAGE = 'ADD-MESSAGE'

const data = {
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
                messages: [...state.messages, { id: 5, message: action.newMessage }],
            }
        default:
            return state
    }
}

export const addMessageActionCreate = (newMessage) => ({ type: ADD_MESSAGE, newMessage })

export default dialogsReducer