// == Base:
import { Component } from 'react'
import { connect } from 'react-redux'
import {
  getProfileUsersThunk,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
} from '../../../redux/reducers/profile-reducer'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
// == Styles:
import './Profile.scss'
// == Components:
import Profile from './Profile'

class ProfileContainer extends Component {
  componentDidMount() {
    this.updateProfile()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.updateProfile()
    }
  }

  updateProfile() {
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
    return (
      <Profile
        isOwner={!this.props.match.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
        saveProfile={this.props.saveProfile}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.ProfilePage.profile,
    status: state.ProfilePage.status,
    authorizedUserId: state.Auth.id,
    isAuth: state.Auth.isAuth,
  }
}

export default compose(
  connect(mapStateToProps, {
    getProfileUsersThunk,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
  }),
  withRouter
)(ProfileContainer)
