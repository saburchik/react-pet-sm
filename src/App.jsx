// == Base:
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { initializeApp } from './redux/reducers/app-reducer'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import store from './redux/redux-store'
import { Provider } from 'react-redux'
// == Styles:
import './App.scss'
// == Components:
import HeaderContainer from './components/Header/HeaderContainer'
import SidebarContainer from './components/Sidebar/SidebarContainer'
import Login from './components/Main/Login/Login'
import Footer from './components/Footer/Footer'
import Preloader from './components/common/Preloader'
import { withSuspense } from './hoc/withSuspense'

const DialogsContainer = React.lazy(() =>
  import('./components/Main/Dialogs/DialogsContainer')
)
const UsersContainer = React.lazy(() =>
  import('./components/Main/Users/UsersContainer')
)
const ProfileContainer = React.lazy(() =>
  import('./components/Main/Profile/ProfileContainer')
)

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app'>
        <HeaderContainer />
        <SidebarContainer />
        <main className='app__main'>
          <Switch>
            <Route
              path='/profile/:userId?'
              render={withSuspense(ProfileContainer)}
            />
            <Route
              path='/dialogs'
              exact
              render={withSuspense(DialogsContainer)}
            />
            <Route path='/users' exact render={withSuspense(UsersContainer)} />
            <Route path='/login' exact render={() => <Login />} />
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.App.initialized,
  }
}

const AppContainer = compose(
  connect(mapStateToProps, { initializeApp }),
  withRouter
)(App)

const MainApp = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppContainer />
      </HashRouter>
    </Provider>
  )
}

export default MainApp
