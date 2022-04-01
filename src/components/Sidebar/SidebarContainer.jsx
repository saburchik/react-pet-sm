import './Sidebar.scss'
import Sidebar from './Sidebar'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    return {
        friends: state.Sidebar.friends
    }
}

const SidebarContainer = connect(mapStateToProps)(Sidebar)

export default SidebarContainer