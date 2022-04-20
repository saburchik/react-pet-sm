import { combineReducers, createStore } from 'redux'
import profileReducer from './reducers/profile-reducer'
import dialogsReducer from './reducers/dialogs-reducer'
import sidebarReducer from './reducers/sidebar-reducer'
import usersReducer from './reducers/users-reducer'
import authReducer from './reducers/auth-reducer'


let reducers = combineReducers({
    ProfilePage: profileReducer,
    DialogsPage: dialogsReducer,
    Sidebar: sidebarReducer,
    UsersPage: usersReducer,
    Auth: authReducer
})

let store = createStore(reducers)

window.store = store

export default store