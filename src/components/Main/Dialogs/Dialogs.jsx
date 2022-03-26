// == Base:
import React from 'react'
// == Styles:
import './Dialogs.scss'
// == Components:
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = ({ data }) => {
    const state = data.DialogsPage

    const createNewMessage = React.createRef()

    const onAddMessage = () => {
        let text = createNewMessage.current.value

        alert(text)
    }

    return (
        <section className='dialogs'>
            <h2>Dialogs</h2>
            <div className='dialogs__inner'>
                <section className='dialog__lists'>
                    <h3>Messaging</h3>
                    <ul className='list__items'>
                        {
                            state.dialogs.map(d => <Dialog id={d.id} name={d.name} />)
                        }
                    </ul>
                </section>
                <div className='dialog__messages'>
                    <ul className='message__items'>
                        {
                            state.messages.map(m => <Message id={m.id} name={m.name} message={m.message} />)
                        }
                    </ul>
                    <div className='message__sends'>
                        <textarea className='message__textarea' ref={createNewMessage} placeholder=' Write a message...' />
                        <button onClick={onAddMessage}>Send</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dialogs