// == Base:
import { Link } from 'react-router-dom'
import Avatar from '../../common/Avatar';
// == Styles:
import './Users.scss'

const User = ({ followThunk, unfollowThunk, user, followingInProgress }) => {
    return (
        <li className="user__item" key={user.id}>
            <div className="user__photo">
                <Link to={'/profile/' + user.id}>
                    <Avatar className={null} avatar={user.photos.large} />
                </Link>
                {user.followed ?
                    <button onClick={() => unfollowThunk(user.id)}
                        disabled={followingInProgress.some(id => id === user.id)}
                    >Unfollow</button>
                    :
                    <button onClick={() => followThunk(user.id)}
                        disabled={followingInProgress.some(id => id === user.id)}
                    >Follow</button>}
            </div>
            <div className="user__info">
                <p className="user__info-name">{user.name}</p>
                {/* <p className="user__info-country">{u.location.country}</p> */}
                <p className="user__info-status">{user.status}</p>
                {/* <p className="user__info-city">{u.location.city}</p> */}
            </div>
        </li>
    )
}

export default User