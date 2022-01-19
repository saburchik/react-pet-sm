// == Base:
import { Routes, Route } from 'react-router-dom'
// == Styles:
import './App.scss'
// == Components:
import Header from './components/Header/Heade'
import Sidebar from './components/Sidebar/Sidebar'
import Profile from './components/Main/Profile/Profile'
import Dialogs from './components/Main/Dialogs/Dialogs'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <main className='app__main'>
        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/dialogs/*' element={<Dialogs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}