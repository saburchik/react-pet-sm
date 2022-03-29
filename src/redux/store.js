import profileReducer from "./reducers/profile-reducer"
import dialogsReducer from './reducers/dialogs-reducer'

const store = {
    _state: {
        DialogsPage: {
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
        },
        ProfilePage: {
            postState: 'Saburchik',
            posts: [
                { id: 1, message: 'Hello! How are you man?' },
                { id: 2, message: 'Oh my god, who I looking at? I am fine bro' },
                { id: 3, message: 'zzz' }
            ]
        },
        Sidebar: {
            friends: [
                { id: 1, name: 'Kate', avatar: 'https://avatars.mds.yandex.net/i?id=4f1ab024da0436b4472c96782fb11854-5495295-images-thumbs&n=13' },
                { id: 2, name: 'Felix', avatar: 'https://avatars.mds.yandex.net/i?id=918590bce97f5cf639125b8a93631c32-5427554-images-thumbs&n=13' },
                { id: 3, name: 'Michael', avatar: 'https://avatars.mds.yandex.net/i?id=f53c6a9ba8f260f35ff6d22aa5b9e0c5-5652653-images-thumbs&n=13' }
            ]
        },
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action)
        this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action)
        this._callSubscriber(this._state)
    }
}

window.store = store
export default store