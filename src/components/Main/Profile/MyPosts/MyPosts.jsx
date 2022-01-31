// == Styles:
import './MyPosts.scss'
// == Components:
import Post from './Post/Post'

const Posts = () => {

    const posts = [
        { id: 1, message: 'Hello! How are you man?' },
        { id: 2, message: 'Oh my god, who I looking at? I am fine bro' },
        { id: 3, message: '' }
    ]

    const postsDraw = posts.map(pos => <Post id={pos.id} message={pos.message} />)

    return (
        <article className='posts__inner'>
            <h3 className='title-h3'>My posts</h3>
            <div className='posts__textarea'>
                <textarea placeholder='Enter to text' />
                <button>Add post</button>
            </div>
            <aside className='posts__wrapper'>
                {postsDraw}
            </aside>
        </article>
    )
}

export default Posts