// == Base:
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom"
import store from './redux/store'
// == Components:
import App from './App'


const renderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>,
    document.getElementById('root')
  )
}
renderEntireTree(store)

store.subscribe(renderEntireTree)