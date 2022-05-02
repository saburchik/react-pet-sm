// == Base:
import React from 'react'
import { connect } from 'react-redux'
import { getProfileUsersThunk, getStatus, updateStatus } from '../../../redux/reducers/profile-reducer'
import { withRouter } from 'react-router-dom'
// == Styles:
import './Profile.scss'
// == Components:
import Profile from './Profile'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
    // 23541 1034
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) { userId = 23541 }
        this.props.getProfileUsersThunk(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <Profile
            {...this.props}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.ProfilePage.profile,
        status: state.ProfilePage.status,
    }
}

export default compose(
    connect(mapStateToProps, { getProfileUsersThunk, getStatus, updateStatus }),
    withRouter
)(ProfileContainer)