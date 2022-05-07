// == Base:
import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { setAuth } from '../../redux/reducers/auth-reducer'
// == Components:
import Header from './Header.tsx'

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setAuth()
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth,
    login: state.Auth.login
})

export default compose(
    connect(mapStateToProps, { setAuth })
)(HeaderContainer)