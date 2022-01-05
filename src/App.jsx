// == Styles:
import './App.scss'
// == Components:
import Header from './components/Header/Heade'
import Sidebar from './components/Sidebar/Sidebar'
import Profile from './components/Profile/Profile'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Profile />
      <Footer />
    </div>
  )
}