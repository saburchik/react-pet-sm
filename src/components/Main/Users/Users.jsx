// == Base:
import * as axios from "axios"
import React from "react"
// == Styles:
import './Users.scss'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    onPageChanged(pageNumber) {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className="users">
                <h2>Users</h2>
                <ul className="users__paganation">
                    {pages.map(p => {
                        return <li onClick={(e) => { this.onPageChanged(p) }} className={this.props.currentPage === p && "users__paganation-active"}>{p}</li>
                    })}
                </ul>
                <ul className="users__items">
                    {this.props.users.map(u => {
                        return (
                            <li className="user__item" key={u.id}>
                                <div className="user__photo">
                                    <img src={
                                        u.photos.large !== null
                                            ? u.photos.large
                                            : 'https://avatars.mds.yandex.net/i?id=3bdd061bff68b2ae3e738956432bb77b-2399446-images-thumbs&n=13&exp=1'} alt="" />
                                    {
                                        u.followed
                                            ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                            : <button onClick={() => this.props.follow(u.id)}>Follow</button>
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
}

export default Users