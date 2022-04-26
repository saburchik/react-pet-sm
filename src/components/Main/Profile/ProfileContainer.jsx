// == Base:
import React from 'react'
import { usersAPI } from "../../../api/api"
import { connect } from 'react-redux'
import { setUserProfile } from '../../../redux/reducers/profile-reducer'
import { withRouter } from 'react-router-dom'
// == Styles:
import './Profile.scss'
// == Components:
import Profile from './Profile'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 11761
        }
        usersAPI.getProfileUsers(userId)
            .then(data => {
                this.props.setUserProfile(data)
            })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.ProfilePage.profile
    }
}

let WithUrlDataComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUserProfile
}
)(WithUrlDataComponent)