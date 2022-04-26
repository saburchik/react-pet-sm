// == Base:
import React from 'react'
import { usersAPI } from "../../api/api"
import { connect } from 'react-redux'
import { setAuthUserData } from '../../redux/reducers/auth-reducer'
// == Components:
import Header from './Header'

class HeaderContainer extends React.Component {
    componentDidMount() {
        usersAPI.setAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let { id, login, email } = data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
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

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)