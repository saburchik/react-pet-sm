// == Styles:
import './Dialogs.scss'
// == Components:
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'

const Dialogs = (props) => {
    return (
        <section className='dialogs'>
            <h2>Dialogs</h2>
            <div className='dialogs__inner'>
                <section className='dialog__lists'>
                    <h3>Messaging</h3>
                    <ul className='list__items'>
                        <Dialog name='Andrey' id='1' />
                        <Dialog name='Masha' id='2' />
                        <Dialog name='David' id='3' />
                    </ul>
                </section>
                <div className='dialog__messages'>
                    <ul className='message__items'>
                        <Message name='Me' id='11' message='Hello, how are you?' />
                        <Message name='David' id='3' message='lorem somethin text about blah-blah' />
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