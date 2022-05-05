// == Base:
import { connect } from 'react-redux'
import { addMessageActionCreate } from '../../../redux/reducers/dialogs-reducer'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'
// == Components:
import Dialogs from './Dialogs'
import { compose } from 'redux'

let mapStateToProps = (state) => {
    return {
        state: state.DialogsPage,
        defaultValue: state.DialogsPage.defaultValue
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessage) => {
            dispatch(addMessageActionCreate(newMessage))
        }
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)