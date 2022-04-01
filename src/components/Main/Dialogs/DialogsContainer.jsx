// == Base:
import { connect } from 'react-redux'
import { updateMessageActionChange, addMessageActionCreate } from '../../../redux/reducers/dialogs-reducer'
// == Components:
import Dialogs from './Dialogs'

let mapStateToProps = (state) => {
    return {
        state: state.DialogsPage,
        defaultValue: state.DialogsPage.defaultValue
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateText: (text) => {
            let action = updateMessageActionChange(text)
            dispatch(action)
        },
        addMessage: () => {
            dispatch(addMessageActionCreate())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer