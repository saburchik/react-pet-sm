// == Base:
import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { logout } from '../../redux/reducers/auth-reducer'
// == Components:
import Header from './Header'

class HeaderContainer extends React.Component {

    render() {

        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth,
    email: state.Auth.email
})

export default compose(
    connect(mapStateToProps, { logout })
)(HeaderContainer)