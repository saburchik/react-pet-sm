// == Base:
import React from "react"
// == Styles:
import './Users.scss'

const Users = ({ totalUsersCount, pageSize, currentPage, follow, unfollow, onPageChanged, users, isFetching }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    console.log(isFetching);

    return (
        <div className="users">
            <h2>Users</h2>
            <ul className="users__pagination">
                {pages.map(p => {
                    return <li key={p}
                        onClick={(e) => onPageChanged(p)}
                        className={currentPage === p ? "users__pagination-active" : "users__pagination"}>
                        {p}
                    </li>
                })}
            </ul>
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
        </div >
    )
}

export default Users