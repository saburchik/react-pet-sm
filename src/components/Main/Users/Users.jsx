// == Base:
import * as axios from "axios"
import React from "react"
// == Styles:
import './Users.scss'

const Users = ({ users, follow, unfollow, setUsers }) => {

    if (users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(res => {
                debugger
                setUsers(res.data.items)
            })
    }

    return (
        <div className="users">
            <h2>Users</h2>
            <ul className="users__items">
                {users.map(u => {
                    return (
                        <li className="user__item" key={u.id}>
                            <div className="user__photo">
                                <img src={
                                    u.photos.large !== null
                                        ? u.photos.large
                                        : 'https://avatars.mds.yandex.net/i?id=3bdd061bff68b2ae3e738956432bb77b-2399446-images-thumbs&n=13&exp=1'} alt="" />
                                {
                                    u.followed
                                        ? <button onClick={() => unfollow(u.id)}>Unfollow</button>
                                        : <button onClick={() => follow(u.id)}>Follow</button>
                                }
                            </div>
                            <div className="user__info">
                                <p className="user__info-name">{u.name}</p>
                                {/* <p className="user__info-country">{u.location.country}</p> */}
                                <p className="user__info-status">{u.status}</p>
                                {/* <p className="user__info-city">{u.location.city}</p> */}
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Users