// == Base:
import React from 'react'
import * as axios from "axios"
import { connect } from 'react-redux'
import { setUserProfile } from '../../../redux/reducers/profile-reducer'
// == Styles:
import './Profile.scss'
// == Components:
import Profile from './Profile'

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(res => {
                this.props.setUserProfile(res.data)
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

export default connect(mapStateToProps, {
    setUserProfile
}
)(ProfileContainer)