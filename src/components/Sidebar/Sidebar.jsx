import { NavLink, Link } from 'react-router-dom'
import './Sidebar.scss'

const Sidebar = ({ friends }) => {

    return (
        <aside className="App-aside">
            <ul className='sidebar-links'>
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
                    <NavLink className='aside-link' to='/users'>Find Users</NavLink>
                </li>
                <li>
                    <a className='aside-link' href='/'>Settings</a>
                </li>
            </ul>
            <ul className='sidebar-friends'>
                {friends.map(data => <li key={data.id}>
                    <Link to='/'>
                        <img src={data.avatar} alt="avatar" />
                        <h4>{data.name}</h4>
                    </Link>
                </li>)}
            </ul>
        </aside>
    )
}

export default Sidebar