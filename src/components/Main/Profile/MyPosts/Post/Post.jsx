// == Styles:
import './Post.scss'

const Post = (props) => {
    return (
        <article className='post__item'>
            <a className='post__photo' href="/">
                <img src="https://avatars.mds.yandex.net/i?id=b54f120e901627eb4a503d6322b19bc4-5508813-images-thumbs&n=13&exp=1" alt="" />
            </a>
            <p>
                {props.message}
            </p>
        </article>
    )
}

export default Post