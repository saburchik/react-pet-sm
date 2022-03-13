// == Base:
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
// == Components:
import App from './App'

const data = {
  DialogsPage: {
    dialogs: [
      { id: 1, name: 'Andrey' },
      { id: 3, name: 'Masha' },
      { id: 4, name: 'David' }
    ],
    messages: [
      { id: 1, message: 'Hello, how are you?' },
      { id: 4, message: 'lorem somethin text about blah-blah' }
    ]
  },
  ProfilePage: {
    posts: [
      { id: 1, message: 'Hello! How are you man?' },
      { id: 2, message: 'Oh my god, who I looking at? I am fine bro' },
      { id: 3, message: 'zzz' }
    ]
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App data={data} />
  </BrowserRouter>,
  document.getElementById('root')
)
