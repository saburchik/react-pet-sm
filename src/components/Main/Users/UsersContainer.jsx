// == Base:
import { connect } from 'react-redux'
import { followThunk, unfollowThunk, setCurrentPage, toggleFollowingProgress, requestUsers } from '../../../redux/reducers/users-reducer'
import React from "react"
import { compose } from 'redux'
import { getUserSize, getUsers, getTotalItemsCount, getCurrentPage, getFollowingInProgress, getIsFetching } from '../../../redux/selectors/users-selector'
// == Styles:
import './Users.scss'
// == Components:
import Users from './Users'
import Preloader from '../../common/Preloader'


class UsersContainer extends React.Component {
    componentDidMount() {
        const { currentPage, userSize } = this.props
        this.props.getUsers(currentPage, userSize)
    }
    onPageChanged = (pageNumber) => {
        const userSize = this.props
        this.props.getUsers(pageNumber, userSize)
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalItemsCount={this.props.totalItemsCount}
                userSize={this.props.userSize}
                currentPage={this.props.currentPage}
                followThunk={this.props.followThunk}
                unfollowThunk={this.props.unfollowThunk}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        userSize: getUserSize(state),
        totalItemsCount: getTotalItemsCount(state),
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