import profileReducer, { addPostActionCreate, deletePost } from './profile-reducer'

const dataLocal = {
    posts: [
        { id: 1, message: 'Hello! How are you man?' },
        { id: 2, message: 'Oh my god, who I looking at? I am fine bro' },
        { id: 3, message: 'zzz' }
    ]
}

test('new post should be added', () => {
    // == The first one is the test data:
    let action = addPostActionCreate("Saburchik hey yo")

    // == The second one is the action:
    let newState = profileReducer(dataLocal, action)

    // == The third one is the expectation:
    expect(newState.posts.length).toBe(4)
    expect(newState.posts[3].message).toBe('Saburchik hey yo')
})

test('after deleting the length of message should be decrement', () => {
    // == The first one is the test data:
    let action = deletePost(1)

    // == The second one is the action:
    let newState = profileReducer(dataLocal, action)
    // == The third one is the expectation:
    expect(newState.posts).toHaveLength(2)
})