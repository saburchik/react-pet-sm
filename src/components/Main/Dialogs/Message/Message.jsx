// == Styles"
import './Message.scss'

const Message = (props) => {
    return (
        <li>
            <img src="https://avatars.mds.yandex.net/i?id=d230be33021eb46895399ad7c4569ead-5582363-images-thumbs&n=13" alt="photoUser" />
            <div className='message__wrapper'>
                <h4>{props.name}</h4>
                <p>{props.message}</p>
            </div>
        </li>
    )
}

export default Message