// == Base:
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom"
import store from './redux/redux-store'
import { Provider } from 'react-redux'
// == Components:
import App from './App'

ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)