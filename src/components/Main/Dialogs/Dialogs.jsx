// == Base:
import React from 'react'
// == Styles:
import './Dialogs.scss'
// == Components:
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = ({ state, defaultValue, updateText, addMessage }) => {
    const createMessage = React.createRef()

    const onAddMessage = () => {
        addMessage()
    }

    const onUpdateText = () => {
        let text = createMessage.current.value
        updateText(text)
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
                        <textarea className='message__textarea' value={defaultValue} ref={createMessage} onChange={onUpdateText} />
                        <button onClick={onAddMessage}>Send</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dialogs