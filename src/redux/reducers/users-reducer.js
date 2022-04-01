

const data = {
    users: [
        { id: 1, name: 'Maksim', avatar: '', follow: true },
        { id: 2, name: 'Jack', avatar: '', follow: true },
        { id: 3, name: 'Stephan', avatar: '', follow: false },
        { id: 4, name: 'Nicole', avatar: '', follow: false }
    ]
}

const usersReducer = (state = data, action) => {

    switch (action.type) {
        default:
            return state
    }
}

export default usersReducer