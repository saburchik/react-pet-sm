// == Base:
import { connect } from 'react-redux'
import { followThunk, unfollowThunk, setCurrentPage, toggleFollowingProgress, requestUsers } from '../../../redux/reducers/users-reducer'
import React from "react"
import { compose } from 'redux'
import { getPageSize, getUsers, getTotalUsersCount, getCurrentPage, getFollowingInProgress, getIsFetching } from '../../../redux/selectors/users-selector'
// == Styles:
import './Users.scss'
// == Components:
import Users from './Users'
import Preloader from '../../common/Preloader'


class UsersContainer extends React.Component {
    componentDidMount() {
        const { currentPage, pageSize } = this.props
        this.props.getUsers(currentPage, pageSize)
    }
    onPageChanged = (pageNumber) => {
        const pageSize = this.props
        this.props.getUsers(pageNumber, pageSize)
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                followThunk={this.props.followThunk}
                unfollowThunk={this.props.unfollowThunk}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
            // toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps,
        {
            followThunk,
            unfollowThunk,
            setCurrentPage,
            toggleFollowingProgress,
            getUsers: requestUsers
        }
    )
)(UsersContainer)