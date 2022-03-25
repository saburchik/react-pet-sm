// == Base:
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
// == Components:
import App from './App'
import state from './redux/state'

ReactDOM.render(
  <BrowserRouter>
    <App data={state} />
  </BrowserRouter>,
  document.getElementById('root')
)
