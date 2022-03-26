// == Base:
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom"
import { addPost } from './redux/state'
// == Components:
import App from './App'


export const renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App data={state} addPost={addPost} />
        </BrowserRouter>,
        document.getElementById('root')
    )
}
