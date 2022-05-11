// == Base:
import React from 'react'
import { connect } from 'react-redux'
import { getProfileUsersThunk, getStatus, updateStatus } from '../../../redux/reducers/profile-reducer'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
// == Styles:
import './Profile.scss'
// == Components:
import Profile from './Profile'

class ProfileContainer extends React.Component {
    // 23541 1034
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfileUsersThunk(userId)
        this.props.getStatus(userId)
    }

    render() {
        console.log('RENDER Profile')
        return <Profile
            {...this.props}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
        />
    }
}

const mapStateToProps = (state) => {
    console.log('Profile mapStateToProps')
    return {
        profile: state.ProfilePage.profile,
        status: state.ProfilePage.status,
        authorizedUserId: state.Auth.id,
        isAuth: state.Auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, { getProfileUsersThunk, getStatus, updateStatus }),
    withRouter
)(ProfileContainer)