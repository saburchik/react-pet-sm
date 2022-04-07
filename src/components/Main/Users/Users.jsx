// == Base:
import React from "react"
// == Styles:
import './Users.scss'

const Users = ({ users, follow, unfollow, setUsers }) => {

    if (users.length === 0) {
        setUsers([
            {
                id: 1,
                fullName: 'Maksim',
                status: 'I am boss',
                location: { country: 'Russian', city: 'Novosibirsk' },
                avatar: 'https://avatars.mds.yandex.net/i?id=a21db4645e590d90b937f39f94686372-5648147-images-thumbs&n=13&exp=1',
                followed: false
            },
            { id: 2, fullName: 'Jack', status: 'I am not boss', location: { country: 'Estonia', city: 'Narva' }, avatar: 'https://avatars.mds.yandex.net/i?id=97ab89d5b25d982ea3f7c1836b8a0359-5477525-images-thumbs&n=13&exp=1', followed: false },
            { id: 3, fullName: 'Stephan', status: 'I am boss too', location: { country: 'Ukraine', city: 'Kiev' }, avatar: 'https://avatars.mds.yandex.net/i?id=e02adda79ec9e80ed7ce0220937d21f1-5450792-images-thumbs&n=13&exp=1', followed: true },
            { id: 4, fullName: 'Nicole', status: 'I am director', location: { country: 'Latvia', city: 'Riga' }, avatar: 'https://avatars.mds.yandex.net/i?id=71b183a5367053a01e88f9d02e95a048-4826597-images-thumbs&n=13&exp=1', followed: true }
        ])
    }

    return (
        <div className="users">
            <h2>Users</h2>
            <ul className="users__items">
                {users.map(u => {
                    return (
                        <li className="user__item" key={u.id}>
                            <div className="user__photo">
                                <img src={u.avatar} alt="" />
                                {u.followed
                                    ? <button onClick={() => unfollow(u.id)}>Unfollow</button>
                                    : <button onClick={() => follow(u.id)}>Follow</button>


                                }
                            </div>
                            <div className="user__info">
                                <p className="user__info-name">{u.fullName}</p>
                                <p className="user__info-country">{u.location.country}</p>
                                <p className="user__info-status">{u.status}</p>
                                <p className="user__info-city">{u.location.city}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Users