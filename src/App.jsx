// == Base:
import React from 'react'
import { Routes, Route } from 'react-router-dom'
// == Styles:
import './App.scss'
// == Components:
import Header from './components/Header/Heade'
import SidebarContainer from './components/Sidebar/SidebarContainer'
import Profile from './components/Main/Profile/Profile'
import Users from './components/Main/Users/Users'
import DialogsContainer from './components/Main/Dialogs/DialogsContainer'
import Footer from './components/Footer/Footer'

export default function App() {

  return (
    <div className="app">
      <Header />
      <SidebarContainer />
      <main className='app__main'>
        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}