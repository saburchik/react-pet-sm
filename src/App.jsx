// == Base:
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { initializeApp } from './redux/reducers/app-reducer'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom"
import store from './redux/redux-store'
import { Provider } from 'react-redux'
// == Styles:
import './App.scss'
// == Components:
import HeaderContainer from './components/Header/HeaderContainer'
import SidebarContainer from './components/Sidebar/SidebarContainer'
import ProfileContainer from './components/Main/Profile/ProfileContainer'
import UsersContainer from './components/Main/Users/UsersContainer'
import DialogsContainer from './components/Main/Dialogs/DialogsContainer'
import Login from './components/Main/Login/Login'
import Footer from './components/Footer/Footer'
import Preloader from './components/common/Preloader'

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <Provider store={store} >
        <BrowserRouter>
          <div className="app">
            <HeaderContainer />
            <SidebarContainer />
            <main className='app__main'>
              <Switch>
                <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
                <Route path='/dialogs' exact render={() => <DialogsContainer />} />
                <Route path='/users' exact render={() => <UsersContainer />} />
                <Route path='/login' exact render={() => <Login />} />
              </Switch>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.App.initialized
  }
}

export default compose(
  connect(mapStateToProps, { initializeApp }),
  withRouter
)(App)