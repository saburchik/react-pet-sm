// == Base:
import React from "react"
// == Styles:
import './Users.scss'
// == Components:
import Paginator from "../../common/Paginator"
import User from './User'

const Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props }) => {
    return (
        <div className="users">
            <h2>Users</h2>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize} />
            <ul className="users__items">
                {users.map(user => <User user={user} key={user.id} followThunk={props.followThunk}
                    unfollowThunk={props.unfollowThunk} followingInProgress={props.followingInProgress} />
                )}
            </ul>
        </div >
    )
}

export default Users