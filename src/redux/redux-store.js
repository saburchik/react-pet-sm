// == Base:
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk'
// == Reducers:
import profileReducer from './reducers/profile-reducer'
import dialogsReducer from './reducers/dialogs-reducer'
import sidebarReducer from './reducers/sidebar-reducer'
import usersReducer from './reducers/users-reducer'
import authReducer from './reducers/auth-reducer.ts'


let reducers = combineReducers({
    ProfilePage: profileReducer,
    DialogsPage: dialogsReducer,
    Sidebar: sidebarReducer,
    UsersPage: usersReducer,
    Auth: authReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store