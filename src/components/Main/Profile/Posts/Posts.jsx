// == Styles:
import './Posts.scss'

const Posts = () => {
    return (
        <article className='posts__inner'>
            <h3 className='title-h3'>My posts</h3>
            <div className='posts__textarea'>
                <textarea placeholder='Enter to text' />
                <button>Send</button>
            </div>
            <aside className='posts__wrapper'>
                <article className='post__item'>
                    <h3 className='title-h3'>Title:</h3>
                    <p>Post 1</p>
                </article>
                <article className='post__item'>
                    <h3 className='title-h3'>Title:</h3>
                    <p>Post 2</p>
                </article>
            </aside>
        </article>
    )
}

export default Posts