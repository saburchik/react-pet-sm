// == Base:
import React from 'react'
import { updateMessageActionChange, addMessageActionCreate } from '../../../redux/reducers/dialogs-reducer'
// == Styles:
import './Dialogs.scss'
// == Components:
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = ({ store }) => {
    const state = store.getState().DialogsPage
    const messageState = store.getState().DialogsPage.messageState

    const createNewMessage = React.createRef()

    const onAddMessage = () => {
        store.dispatch(addMessageActionCreate())
    }

    const changeMessateText = () => {
        let text = createNewMessage.current.value
        let action = updateMessageActionChange(text)
        store.dispatch(action)
    }

    return (
        <section className='dialogs'>
            <h2>Dialogs</h2>
            <div className='dialogs__inner'>
                <section className='dialog__lists'>
                    <h3>Messaging</h3>
                    <ul className='list__items'>
                        {
                            state.dialogs.map(d => <Dialog key={d.id} id={d.id} name={d.name} />)
                        }
                    </ul>
                </section>
                <div className='dialog__messages'>
                    <ul className='message__items'>
                        {
                            state.messages.map(m => <Message key={m.id} id={m.id} name={m.name} message={m.message} />)
                        }
                    </ul>
                    <div className='message__sends'>
                        <textarea className='message__textarea' value={messageState} ref={createNewMessage} onChange={changeMessateText} />
                        <button onClick={onAddMessage}>Send</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dialogs