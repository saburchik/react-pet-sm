import './Sidebar.scss'

const Sidebar = () => {
    return (
        <aside className="App-aside">
            <ul>
                <li>
                    <a className='aside-link' href='/'>Profile</a>
                </li>
                <li>
                    <a className='aside-link' href='/'>Friends</a>
                </li>
                <li>
                    <a className='aside-link' href='/'>Messages</a>
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