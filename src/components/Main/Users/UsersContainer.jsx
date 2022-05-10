// == Base:
import { connect } from 'react-redux'
import { followThunk, unFollowThunk, setCurrentPage, toggleFollowingProgress, requestUsers } from '../../../redux/reducers/users-reducer'
import React from "react"
import { compose } from 'redux'
// == Styles:
import './Users.scss'
// == Components:
import Users from './Users'
import { getPageSize, getUsers, getTotalUsersCount, getCurrentPage, getFollowingInProgress } from '../../../redux/selectors/users-selector'


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
    }
    render() {
        return <>
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                followThunk={this.props.followThunk}
                unFollowThunk={this.props.unFollowThunk}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>
    }
}

// const mapStateToProps = (state) => {
//     return {
//         users: state.UsersPage.users,
//         pageSize: state.UsersPage.pageSize,
//         totalUsersCount: state.UsersPage.totalUsersCount,
//         currentPage: state.UsersPage.currentPage,
//         followingInProgress: state.UsersPage.followingInProgress,
//     }
// }

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps,
        {
            followThunk,
            unFollowThunk,
            setCurrentPage,
            toggleFollowingProgress,
            requestUsers
        }
    )
)(UsersContainer)