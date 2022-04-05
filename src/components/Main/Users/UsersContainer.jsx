// == Base:
import { connect } from 'react-redux'
import { followAC, unfollowAC, setUsersAC } from '../../../redux/reducers/users-reducer'
import Users from "./Users"

const mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)