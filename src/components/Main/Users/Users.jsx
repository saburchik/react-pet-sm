// == Base:
import React from "react"
// == Styles:
import './Users.scss'
// == Components:
import Paginator from "../../common/Paginator"
import User from './User'

const Users = ({ totalItemsCount, userSize, pageSize, currentPage, onPageChanged, users, ...props }) => {
    return (
        <div className="users">
            <h2>Users</h2>
            <ul className="users__items">
                {users.map(user => <User user={user} key={user.id} followThunk={props.followThunk}
                    unfollowThunk={props.unfollowThunk} followingInProgress={props.followingInProgress} />
                )}
            </ul>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalItemsCount} userSize={userSize} />
        </div >
    )
}

export default Users