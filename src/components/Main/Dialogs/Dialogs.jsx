
import { NavLink, Link } from 'react-router-dom'

// == Styles:
import './Dialogs.scss'

const Dialogs = (props) => {
    return (
        <section className='dialogs'>
            <h2>Dialogs</h2>
            <div className='dialogs__inner'>
                <section className='dialog__lists'>
                    <h3>Messaging</h3>
                    <ul className='list__items'>
                        <li>
                            <Link to='/dialogs/1'>
                                <img src="https://avatars.mds.yandex.net/i?id=d230be33021eb46895399ad7c4569ead-5582363-images-thumbs&n=13" alt="photoUser" />
                                <h4>Andrey</h4>
                            </Link>
                        </li>
                        <li>
                            <NavLink to='/dialogs/2'>
                                <img src="https://avatars.mds.yandex.net/i?id=d230be33021eb46895399ad7c4569ead-5582363-images-thumbs&n=13" alt="photoUser" />
                                <h4>Masha</h4>
                            </NavLink>
                        </li>
                    </ul>
                </section>
                <div className='dialog__messages'>
                    <ul className='message__items'>
                        <li>
                            <img src="https://avatars.mds.yandex.net/i?id=d230be33021eb46895399ad7c4569ead-5582363-images-thumbs&n=13" alt="photoUser" />
                            <div className='message__wrapper'>
                                <h4>Andrey</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, inventore.</p>
                            </div>
                        </li>
                        <li>
                            <img src="https://avatars.mds.yandex.net/i?id=d230be33021eb46895399ad7c4569ead-5582363-images-thumbs&n=13" alt="photoUser" />
                            <div className='message__wrapper'>
                                <h4>Me</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, inventore.</p>
                            </div>
                        </li>
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