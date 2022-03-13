// == Styles:
import './MyPosts.scss'
// == Components:
import Post from './Post/Post'

const Posts = ({ data }) => {
    const state = data.ProfilePage

    return (
        <article className='posts__inner'>
            <h3 className='title-h3'>My posts</h3>
            <div className='posts__textarea'>
                <textarea placeholder='Enter to text' />
                <button>Add post</button>
            </div>
            <aside className='posts__wrapper'>
                {
                    state.posts.map(pos => <Post id={pos.id} message={pos.message} />)
                }
            </aside>
        </article>
    )
}

export default Posts