// == Base:
import React from 'react'
import { Route } from 'react-router-dom'
// == Styles:
import './App.scss'
// == Components:
import HeaderContainer from './components/Header/HeaderContainer'
import SidebarContainer from './components/Sidebar/SidebarContainer'
import ProfileContainer from './components/Main/Profile/ProfileContainer'
import UsersContainer from './components/Main/Users/UsersContainer'
import DialogsContainer from './components/Main/Dialogs/DialogsContainer'
import Footer from './components/Footer/Footer'
import { Switch } from 'react-router-dom'

export default function App() {

  return (
    <div className="app">
      <HeaderContainer />
      <SidebarContainer />
      <main className='app__main'>
        <Switch>
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/dialogs' exact render={() => <DialogsContainer />} />
          <Route path='/users' exact render={() => <UsersContainer />} />
        </Switch>
      </main>
      <Footer />
    </div>
  )
}