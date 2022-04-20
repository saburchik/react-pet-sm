// == Base:
import React from 'react'
import * as axios from "axios"
// == Components:
import Header from './Header'

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(res => {
                debugger
            })

    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

export default HeaderContainer