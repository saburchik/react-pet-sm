// == Base:
import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { setAuth, logout } from '../../redux/reducers/auth-reducer'
// == Components:
import Header from './Header'

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setAuth()
    }

    render() {

        return (
            <Header {...this.props} profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth,
    email: state.Auth.email
})

export default compose(
    connect(mapStateToProps, { setAuth, logout })
)(HeaderContainer)