// == Base:
import React from "react"
// == Styles:
import './Users.scss'

const Users = ({ users }) => {

    return (
        <div className="users">
            <h2>Users</h2>
            <ul className="users__items">
                {users.map(u => {
                    return (
                        <li className="user__item" key={u.id}>
                            <div className="user__photo">
                                <img src={u.avatar} alt="" />
                                <button>{u.followed === false ? 'Unfollow' : 'Follow'}</button>
                            </div>
                            <div className="user__info">
                                <p>{u.fullName}</p>
                                <p>{u.status}</p>
                                <p>{u.location.country}</p>
                                <p>{u.location.city}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Users