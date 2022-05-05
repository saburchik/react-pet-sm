// == Base:
import React from 'react'
import { Field, reduxForm } from 'redux-form'
// == Styles:
import './Dialogs.scss'
// == Components:
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = ({ state, addMessage }) => {
    const onSubmit = (values) => {
        addMessage(values.textareaMessage)
        values.textareaMessage = ''
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
                    <DialogsReduxForm onSubmit={onSubmit} />
                </div>
            </div>
        </section>
    )
}

const DialogForm = ({ handleSubmit }) => {

    return (
        <form className='message__sends' onSubmit={handleSubmit}>
            <Field
                className='message__textarea'
                name='textareaMessage'
                component="textarea"
            />
            <button>Send</button>
        </form>
    )
}

const DialogsReduxForm = reduxForm({ form: 'dialogs' })(DialogForm)

export default Dialogs