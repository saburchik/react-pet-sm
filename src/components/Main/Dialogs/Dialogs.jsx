// == Styles:
import './Dialogs.scss'
// == Components:
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = (props) => {

    const dialogs = [
        { id: 1, name: 'Andrey' },
        { id: 3, name: 'Masha' },
        { id: 4, name: 'David' }
    ]
    const messages = [
        { id: 1, message: 'Hello, how are you?' },
        { id: 4, message: 'lorem somethin text about blah-blah' }
    ]

    const dialogsDraw = dialogs.map(dia => <Dialog name={dia.name} id={dia.id} />)
    const messagesDraw = messages.map(mes => <Message name={mes.name} id={mes.id} message={mes.message} />)

    return (
        <section className='dialogs'>
            <h2>Dialogs</h2>
            <div className='dialogs__inner'>
                <section className='dialog__lists'>
                    <h3>Messaging</h3>
                    <ul className='list__items'>
                        {dialogsDraw}
                    </ul>
                </section>
                <div className='dialog__messages'>
                    <ul className='message__items'>
                        {messagesDraw}
                    </ul>
                    <div className='message__sends'>
                        <textarea className='message__textarea' placeholder='Write a message...' />
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dialogs