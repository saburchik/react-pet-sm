// == Base:
import React from 'react'
// == Styles:
import './MyPosts.scss'
// == Components:
import Post from './Post/Post'

const Posts = ({ data }) => {
    const state = data.ProfilePage

    let newPostEl = React.createRef()

    const onAddPost = () => {
        let text = newPostEl.current.value
        alert(text)
    }

    return (
        <article className='posts__inner'>
            <h3 className='title-h3'>My posts</h3>
            <div className='posts__textarea'>
                <textarea ref={newPostEl} />
                <button onClick={onAddPost}>Add post</button>
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