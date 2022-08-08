// == Base:
import React from 'react'
import {
  Route,
  Switch,
  withRouter,
  BrowserRouter,
  Redirect,
} from 'react-router-dom'
import { connect, Provider } from 'react-redux'
import { compose } from 'redux'
import store from './redux/redux-store'
import { initializeApp } from './redux/reducers/app-reducer'
import { withSuspense } from './hoc/withSuspense'
// == Styles:
import './App.scss'
// == Components:
import HeaderContainer from './components/Header/HeaderContainer'
import SidebarContainer from './components/Sidebar/SidebarContainer'
import Login from './components/Main/Login/Login'
import Footer from './components/Footer/Footer'
import Preloader from './components/common/Preloader'

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
  catchAllUnhandleErrors(reason, promise) {
    if (promise) return alert('Some error occered')
    //console.error(promiseRejectionEvent)
  }
  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener('unhandledrejection', this.catchAllUnhandleErrors())
  }
  componentWillUnmount() {
    window.removeEventListener(
      'unhandledrejection',
      this.catchAllUnhandleErrors()
    )
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
            <Route exact path='/' render={() => <Redirect to='/profile' />} />
            <Route
              path='/profile/:userId?'
              render={withSuspense(ProfileContainer)}
            />
            <Route
              path='/dialogs'
              exact
              render={withSuspense(DialogsContainer)}
            />
            <Route path='*' render={() => <div>404 Not Found</div>} />
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
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default MainApp
