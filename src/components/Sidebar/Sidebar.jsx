import { NavLink } from 'react-router-dom'
import './Sidebar.scss'

const Sidebar = () => {
    return (
        <aside className="App-aside">
            <ul>
                <li>
                    <NavLink className='aside-link' to='/'>Profile</NavLink>
                </li>
                <li>
                    <NavLink className='aside-link' to='/dialogs'>Messages</NavLink>
                </li>
                <li>
                    <a className='aside-link' href='/'>Friends</a>
                </li>
                <li>
                    <a className='aside-link' href='/'>Bookmarks</a>
                </li>
                <li>
                    <a className='aside-link' href='/'>Music</a></li>
                <li>
                    <a className='aside-link' href='/'>Settings</a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar