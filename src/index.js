// == Base:
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom"
import { subscribe, addPost, updatePostText } from './redux/state'
import state from './redux/state'
// == Components:
import App from './App'


const renderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App data={state} addPost={addPost} updatePostText={updatePostText} />
    </BrowserRouter>,
    document.getElementById('root')
  )
}
renderEntireTree(state)

subscribe(renderEntireTree)