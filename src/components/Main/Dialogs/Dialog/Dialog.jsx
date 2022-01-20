// == Base:
import { Link } from 'react-router-dom'
// == Styles"
import './Dialog.scss'

const Dialog = (props) => {
    let path = '/dialogs/' + props.id

    return (
        <li>
            <Link to={path}>
                <img src="https://avatars.mds.yandex.net/i?id=d230be33021eb46895399ad7c4569ead-5582363-images-thumbs&n=13" alt="photoUser" />
                <h4>{props.name}</h4>
            </Link>
        </li>
    )
}

export default Dialog