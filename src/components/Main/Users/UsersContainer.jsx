// == Base:
import { connect } from 'react-redux'
import { followThunk, unFollowThunk, setCurrentPage, toggleFollowingProgress, getUsers } from '../../../redux/reducers/users-reducer'
import React from "react"
// == Styles:
import './Users.scss'
// == Components:
import Users from './Users'
import Preloader from '../../common/Preloader'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> :
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
                />}
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        followingInProgress: state.UsersPage.followingInProgress
    }
}

export default connect(mapStateToProps,
    {
        followThunk,
        unFollowThunk,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers
    }
)(UsersContainer)