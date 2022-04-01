// == Base:
import React from 'react'
// == Styles:
import './MyPosts.scss'
// == Components:
import Post from './Post/Post'

const MyPosts = ({ posts, defaultValue, updateText, addPost }) => {

    let ref = React.createRef()

    const onUpdateText = () => {
        let text = ref.current.value
        updateText(text)
    }

    const onAddPost = () => {
        addPost()
    }

    return (
        <article className='posts__inner'>
            <h3 className='title-h3'>My posts</h3>
            <div className='posts__textarea'>
                <textarea ref={ref} value={defaultValue} onChange={onUpdateText} />
                <button onClick={onAddPost}>Add post</button>
            </div>
            <aside className='posts__wrapper'>
                {
                    posts.map(p => <Post key={p.id} id={p.id} message={p.message} />)
                }
            </aside>
        </article>
    )
}

export default MyPosts