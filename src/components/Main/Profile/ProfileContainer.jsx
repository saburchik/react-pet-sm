// == Base:
import React from 'react'
import { connect } from 'react-redux'
import { getProfileUsersThunk } from '../../../redux/reducers/profile-reducer'
import { withRouter } from 'react-router-dom'
// == Styles:
import './Profile.scss'
// == Components:
import Profile from './Profile'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) { userId = 1034 }
        this.props.getProfileUsersThunk(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.ProfilePage.profile,
        status: state.ProfilePage.status
    }
}

export default compose(
    connect(mapStateToProps, { getProfileUsersThunk }),
    withRouter
)(ProfileContainer)