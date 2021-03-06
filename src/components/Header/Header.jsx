// == Base:
import { Link } from 'react-router-dom'
// == Styles:
import './Header.scss'

const Header = ({ isAuth, email, logout }) => {
    return (
        <header className="App-header">
            <Link className="header__logo" to='/' >
                <img src='https://avatars.mds.yandex.net/i?id=c2e8460981fe4164a7ebea8ab284e13c-5906106-images-thumbs&n=13' alt='logo' />
            </Link>
            {isAuth ?
                <div className="header__login">
                    <h4>{email}</h4>
                    <button onClick={logout}>Logout</button>
                </div>
                :
                <Link className="header__login" to="/login">Login</Link>
            }
        </header>
    )
}

export default Header